Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
    - Popup window with a massage `"Hello world!"` and button "Ok" appeared.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
    - Popup with input field and `"What is your name?"` text appeared. After button "Ok" or "Enter" on keyboard pressed value assigned to new variable "myName"

What effect does calling the `prompt` function have?
    - Popup with input appears.
What is the return value of `prompt`?
    - Value entered, if nothing was entered function returns empty string ''
    - With or without value entered, if cancel pressed function returns null
