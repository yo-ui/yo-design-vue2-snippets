/**
 * yo-design-vue2 代码提示插件
 * created by eric 2021-04-12
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const BASES = require("./snippets/base");
const COMPONENTS = require("./snippets/components");
const prettyHTML = require("pretty");
// 属性值正则
const attrValueReg = /^\w+\s*=\s*['"]?\w*$/;
// 标签值正则
const tagValueReg = /^<?([a-zA-z0-9\-_]+)\s+.*$/;
// 文件正则
const vueFileReg = /\.[vue|html]$/;
// ui 标签开始正则
const yoStartReg = /\<?y-.*/;
//标签名 正则
const tagReg = /^\w$/;
//替换得到真正的prop值
const attrReplaceReg = /^\s*(\w*)\s*=\s*['"]?.*$/;
const triggerSymbols = ["", " ", ":", "<", '"', "/", "'", "@", "(", "{", "."];
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * 代码入口函数
 * @param {vscode.ExtensionContext} context  插件上下文
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "yo-design-vue2-vs" is now active!'
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"yodv-helper.snippets",
		function () {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			vscode.window.showInformationMessage(
				"Hello World from yo-design-vue2-vs!"
			);
		}
	);

	// context.subscriptions.push(disposable);

	const hoverProvider = vscode.languages.registerHoverProvider(
		[
			{
				language: "vue",
				scheme: "file",
			},
			{
				language: "vue-html",
				scheme: "file",
			},
			{
				language: "html",
				scheme: "file",
			},
		],
		{
			provideHover(document, position, token) {
				const fileName = document.fileName;
				const word = document.getText(
					document.getWordRangeAtPosition(position)
				);
				if (vueFileReg.test(fileName) && yoStartReg.test(word)) {
					return new vscode.Hover("测试悬停提示");
				}
				return undefined;
			},
		}
	);
	// context.subscriptions.push(hoverProvider);
	const itemProvider = vscode.languages.registerCompletionItemProvider(
		[
			{
				language: "vue",
				scheme: "file",
			},
			{
				language: "html",
				scheme: "file",
			},
		],
		{
			provideCompletionItems,
			resolveCompletionItem,
		},
		...triggerSymbols
	);
	// console.log("base",BASES)
	context.subscriptions.push(disposable, hoverProvider, itemProvider);
}
/**
 * 插件释放时触发
 */
// this method is called when your extension is deactivated
function deactivate() {
	console.log("yo-design-vue2-vs插件已被释放");
}

function provideCompletionItems(document, position, token, context) {
	console.log("provideCompletionItems--", position.line);
	let text = document.getText(
		new vscode.Range(new vscode.Position(position.line, 0), position)
	);
	const config = vscode.workspace.getConfiguration("yo");
	// 缩进数
	const size = config.get("indent_size");
	//使用的引号类型
	let quotes = config.get("quotes");
	quotes = quotes === "double" ? '"' : "'";
	if (text.trim()) {
		if (position.line == 0) {
			return buildBaseTagSuggestion({ text, document, position });
		} else {
			let attr = text.trimLeft(); //去除左边空格
			let attrValue = text.trim(); //去除两边空格
			let tag = attrValue.replace(tagValueReg, (_, $1) => $1);
			attr = attr.substring(attr.lastIndexOf(" "), position.character); //
			attrValue = attrValue.substring(
				attrValue.lastIndexOf(" "),
				position.character
			); //
			console.log("attr=", attr, "attrValue=", attrValue, "tag=", tag);
			//如果输入是属性值  以" ' 结尾则说明为输入属性值
			if (attrValueReg.test(attrValue.trim())) {
				return buildAttrValueSuggestions({
					tag,
					text: attrValue,
					// size,
					// quotes,
					// document,
					// position,
				});
			} else if (attr.indexOf(" ") > -1) {
				// 属性前面有空格
				return buildAttrSuggestions({
					tag,
					text: attr,
					size,
					quotes,
					document,
					position,
				});
			}
			//如果输入是属性
			return buildTagSuggestions({
				text,
				document,
				size,
				quotes,
				position,
			});
		}
	}
	return [];
}

//建立属性值自动提示
function buildAttrValueSuggestions({
	tag,
	text,
	// document,
	// position,
	// size,
	// quotes,
}) {
	let attr = text.replace(attrReplaceReg, (_, $1) => $1);
	console.log("buildAttrValueSuggestions,attr=", attr);
	let tagObj = COMPONENTS[tag];
	let suggestions = [];
	if (tagObj) {
		let { prop } = tagObj;
		let propObj = prop[attr];
		if (propObj) {
			let { options, optionType } = propObj;
			if (!options) {
				if (optionType === "boolean") {
					options = ["true", "false"];
				}
			}
			options.forEach((item) => {
				let suggestion = {
					label: item,
					kind: vscode.CompletionItemKind.Value,
				};
				suggestions.push(suggestion);
			});
		}
	}
	console.log("buildAttrValueSuggestions,suggestions=", suggestions);
	return suggestions;
}

// 建立属性列表自动提示
function buildAttrSuggestions({
	quotes,
	tag,
	text,
	// size,
	// document,
	//  position
}) {
	let attr = text.replace(attrReplaceReg, (_, $1) => $1).trim();
	let tagObj = COMPONENTS[tag];
	console.log("buildAttrSuggestions,attr=", attr, tag, tagObj);
	let suggestions = [];
	if (tagObj) {
		let { props = [], prop, events = [] } = tagObj;
		if (attr[0] !== "@") {
			props.forEach((item) => {
				let propObj = prop[item] || {};
				let { optionType, description = "", defaultValue } =
					propObj || {};
				let suggestion = {
					label: item,
					insertText:
						optionType === "boolean" && defaultValue
							? `${item} `
							: new vscode.SnippetString(
									`${item}=${quotes}$\{1:${
										defaultValue !== "" ? ":" : ""
									}${defaultValue}\}${quotes}$0`
							  ),
					kind: vscode.CompletionItemKind.Property,
					detail: "YOUI Design Vue",
					documentation: description,
				};
				suggestions.push(suggestion);
			});
		}
		if (attr[0] !== ":") {
			events.forEach((item) => {
				let propObj = prop[item] || {};
				let { description = "" } = propObj || {};
				let suggestion = {
					label: item,
					insertText: new vscode.SnippetString(
						`${
							attr[0] === "@" ? "" : "@"
						}${item}=${quotes}$\{1:()=>{}\}${quotes}$0`
					),
					kind: vscode.CompletionItemKind.Method,
					detail: "YOUI Design Vue",
					documentation: description,
				};
				suggestions.push(suggestion);
			});
		}
	}

	console.log("buildAttrSuggestions,suggestions=", suggestions);
	return suggestions;
}

/**
 * 建立基础模板提示列表
 * @param {*} document ,position
 * @returns
 */
function buildBaseTagSuggestion({
	// tag,
	// document,
	text,
	position,
}) {
	let suggestions = [];
	console.log(
		"buildBaseTagSuggestion",
		text,
		position.line,
		position.character
	);
	// let reg = /^\w$/;
	if (!tagReg.test(text)) {
		return;
	}
	console.log("符合条件才进行提示", text);
	let id = 100;
	for (let tag in BASES) {
		let base = BASES[tag];
		let { body, description } = base || {};
		let suggestion = {
			label: tag,
			sortText: `0${id}${tag}`,
			insertText: new vscode.SnippetString(
				prettyHTML(body.join(""), { ocd: true })
			),
			kind: vscode.CompletionItemKind.Snippet,
			detail: "YOUI Design Vue",
			documentation: description,
		};
		suggestions.push(suggestion);
	}
	return suggestions;
}

// 建立标签提示列表
function buildTagSuggestions({
	text,
	// document,
	size,
	quotes,
	position,
}) {
	let suggestions = [];
	// let text = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
	console.log(text, position.line, position.character);

	let id = 100;
	// console.log("COMPONENTS=",COMPONENTS['y-button'],COMPONENTS)
	for (let tag in COMPONENTS) {
		suggestions.push(
			buildTagSuggestionItem({
				size,
				quotes,
				id,
				tag,
				text,
				// document,
				position,
			})
		);
		id++;
	}

	console.log("suggestions=", suggestions);
	return suggestions;
}

//建立单个标签提示项
function buildTagSuggestionItem({
	id,
	tag,
	text,
	// document,
	position,
	size,
	quotes,
}) {
	console.log(text, position.line, position.character);
	let base = COMPONENTS[tag];
	let { description } = base || {};
	let content = buildTagContent({ text, tag, size, quotes });
	// console.log('---content',text,content)
	let suggestion = {
		label: tag,
		sortText: `0${id}${tag}`,
		insertText: new vscode.SnippetString(
			prettyHTML(content, { ocd: true })
		),
		kind: vscode.CompletionItemKind.Snippet,
		detail: "YOUI Design Vue",
		documentation: description,
	};
	console.log("suggestion=", suggestion);
	return suggestion;
}
// 获取标签片段
function buildTagContent({ text, tag, size, quotes }) {
	let base = COMPONENTS[tag];
	let { prop = {}, defaultProps = [], defaultEvents = [], subTags = [] ,body=""} =
		base || {};
	let propText = defaultProps
		.map((item, index) => {
			let propObj = prop[item];
			let { defaultValue, optionType } = propObj || {};
			console.log(
				"buildTagContent,item=",
				item,
				",defaultValue=",
				defaultValue,
				",optionType=",
				optionType,
				",tag=",
				tag
			);
			if (optionType === "string") {
				return `${item}=${quotes}$\{${index}${
					defaultValue !== "" ? ":" : ""
				}${defaultValue}\}${quotes}`;
			}
			return `:${item}=${quotes}$\{${index}${
				defaultValue !== "" ? ":" : ""
			}${defaultValue}\}${quotes}`;
		})
		.join(" ");
	let subTagText = subTags
		.map((item) => {
			return buildTagContent({ tag: item, text, size, quotes });
		})
		.join(" ");
	let eventText = defaultEvents
		.map((item, index) => {
			return `@${item}=${quotes}$\{${index}:()=>{}\}${quotes}`;
		})
		.join(" ");
	let content = `<${tag} ${propText} ${eventText}>
	${subTagText}${body||""}</${tag}>`;
	if (text.trim() === "<") {
		content = content.substr(1);
	}
	return content;
}

function resolveCompletionItem(item, token) {
	console.log("resolveCompletionItem--", item, token);
	return null;
}

module.exports = {
	activate,
	deactivate,
};
