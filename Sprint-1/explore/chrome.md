Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

## This outputs a popup which says "Hello World"

What effect does calling the `alert` function have?

## W3Schools says that The alert() method displays an alert box with a message and an OK button.Which is what I got when I ran alert via the console.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

## It displays a little input box where you can type in information and click the ok button. If you save the input in a varibale you can acess information that was typed in.

## W3Schools says that the prompt() method displays a dialog box that prompts the user for input.

What is the return value of `prompt`?

## W3Schools says that the prompt() method returns the input value if the user clicks "OK", otherwise it returns null. I also noticed it when typing in my name it returned my name in the console. When I typed nothing it returned nothing.
