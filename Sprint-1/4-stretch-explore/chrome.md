Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Calling the alert function in the Chrome console displays a modal dialog box with the message you provide. For example, alert("Hello world!") will show a popup with the text "Hello world!" and an OK button. The user must click OK to dismiss the dialog and continue interacting with the page.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

Calling the prompt function in the Chrome console displays a modal dialog box with a text input field and the message you provide. For example, prompt("What is your name?") will show a popup asking the user to enter their name. The user can type a response and click OK to submit it or Cancel to dismiss the dialog without entering anything. The input provided by the user is then returned by the function.

What is the return value of `prompt`?

The return value of prompt is either:

The string entered by the user, if they provide input and click "OK".
null if the user clicks "Cancel" or closes the dialog without entering anything.

Example:

let result = prompt("Enter your name:");
console.log(result); // Shows the entered string or null
