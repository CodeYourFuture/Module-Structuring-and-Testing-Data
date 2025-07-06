Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have? It opens a popup message box in the browser with the text:
You must click "OK" to dismiss it before you can do anything else on the page.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have? It opens a popup input box asking:
What is your name?
and I can enter a response, then click "OK" or "Cancel".

What is the return value of `prompt`? Return value:

If I enter a name (e.g., "Sami") and press OK, it returns the string: "Sami"

If I press Cancel, it returns: null
