Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

My answer: it opens a popup alert-box chrome://new-tab-page-says in the browser with a message Hello world!, and it is not going to be disappear until press buttons "ok" or "cancel".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

My answer: let myName = prompt("What is your name?")

What effect does calling the `prompt` function have?

My answer: it invokes the popup box chrome:// new-page-says and an input field for user to enter his name. User prompt to enter his name and press "ok" or "cancel", then box disappear.

What is the return value of `prompt`?

My answer: return some string typed by user or Null if the user press button "cancel".
