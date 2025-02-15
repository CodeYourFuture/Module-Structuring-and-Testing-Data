Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Answer: It creates a pop up window on the browser.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
Answer: It creates a pop up window which allows the user to input data. This prompt has a cancel and an 'OK' button.
What is the return value of `prompt`?
Answer: The return value will depend on what the user inputs. If the user presses the 'cancel' button, then the return is null. If the user presses 'OK' without entering anything, then the return type is an empty string. Else if something is written by the user, then the return value will be what the user has entered.
