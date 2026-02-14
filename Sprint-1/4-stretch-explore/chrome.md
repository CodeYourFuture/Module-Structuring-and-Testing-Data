Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

- It pops up an alert box with the text Hello world! in it.
- I want to specify this did not work until I formatted it as "alert("Hello world!")

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

- Calling "prompt" brings up a box for me to insert text.
- The return value of "prompt" is whatever was inserted in the box.
- I input "let myName = prompt("What is your name?")" so it could store the name used. 