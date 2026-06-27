Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

- It activates a pop-up window with the text "Hello world!" with "OK" as the button text. The execution is paued until the user clicks the "OK" button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

- It activates a pop-up window with the text "What is your name?" with input field and "OK" and "Cancel" buttons. The execution is paused until the user enters a value and clicks the "OK" button.
  What is the return value of `prompt`?
- The return value of the prompt function is the value entered by the user in the input field.
