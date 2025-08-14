Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
=> When I write the code and hit enter ,the message pops up in the screen with the message"Hello world!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
 => After writing and pressing enter a text input field and a message asking for my name pops up .

What effect does calling the `prompt` function have?
=> It shows a pop-up with a question (in this case, "What is your name?") and allows the user to input their response in a text box.

What is the return value of `prompt`?
=> The return value of prompt is the string that the user types into the text box.
