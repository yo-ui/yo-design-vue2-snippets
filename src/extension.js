/**
 * yo-design-vue2 代码提示插件  
 * created by eric 2021-04-12
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const BASES =require('./snippets/base.js')
const prettyHTML = require('pretty')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * 代码入口函数
 * @param {vscode.ExtensionContext} context  插件上下文
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "yo-design-vue2-vs" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('yodv-helper.snippets', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from yo-design-vue2-vs!');
	});

	// context.subscriptions.push(disposable);

	const hoverProvider = vscode.languages.registerHoverProvider([{
        language: 'vue', scheme: 'file'
    }, {
		language: 'html', scheme: 'file'
	}], {
        provideHover(document, position, token) {
            const fileName = document.fileName;
            const word = document.getText(document.getWordRangeAtPosition(position));
            if (/\.[vue|html]$/.test(fileName) && /\<?y-.*/.test(word)) {
                return new vscode.Hover("测试悬停提示");
            }
            return undefined;
        }
	});
	// context.subscriptions.push(hoverProvider);
	const itemProvider = vscode.languages.registerCompletionItemProvider([{
        language: 'vue', scheme: 'file'
    }, {
		language: 'html', scheme: 'file'
	}], {
		provideCompletionItems,
		resolveCompletionItem
	}, "", " ", ":", "<", '"', "/", "'", "@", "(", "{");
	console.log("base",BASES)
	context.subscriptions.push(disposable,hoverProvider,itemProvider);
}
/**
 * 插件释放时触发
 */
// this method is called when your extension is deactivated
function deactivate() {
	console.log("yo-design-vue2-vs插件已被释放")
}

function provideCompletionItems(document, position, token, context) {
	console.log("provideCompletionItems--", position.line);
	if (position.line == 0) {
		return buildBaseSuggestion(document,position);
	}
			return [];
}

function buildBaseSuggestion(document, position) {
	let suggestions=[]
	console.log(document.getText(new vscode.Range(new vscode.Position(position.line, 0), position)), position.line, position.character)

	// const config = vscode.workspace.getConfiguration('yo');
	// const size=config.get("indent_size")
	let id = 100;
	console.log("BASES=",BASES['y-vue-base-js'])
	for (let tag in BASES) {
		let base = BASES[tag]
		console.log("base=",tag)
		let { body, description } = base || {}
		let suggestion={
      label: tag,
      sortText: `0${id}${tag}`,
      insertText: new vscode.SnippetString(prettyHTML(body.join(''),{ocd:true})),
      kind: vscode.CompletionItemKind.Snippet,
      detail: 'YOUI Design Vue',
      documentation: description
    }
		console.log("suggestions=",suggestions)
		suggestions.push(
			suggestion
		);
		console.log("suggestions=",suggestions)
	}

	console.log("suggestions=",suggestions)
	return suggestions
}
		
function resolveCompletionItem(item, token) {
	console.log("resolveCompletionItem--", item);
			return null;
		}

module.exports = {
	activate,
	deactivate
}
