/**
 * yo-design-vue2 代码提示插件  
 * created by eric 2021-04-12
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

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
	let disposable = vscode.commands.registerCommand('yo-design-vue2-vs.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from yo-design-vue2-vs!');
	});

	context.subscriptions.push(disposable);
}
/**
 * 插件释放时触发
 */
// this method is called when your extension is deactivated
function deactivate() {
	console.log("yo-design-vue2-vs插件已被释放")
}

module.exports = {
	activate,
	deactivate
}
