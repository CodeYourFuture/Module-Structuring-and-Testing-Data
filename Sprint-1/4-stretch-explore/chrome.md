Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?


<!-- 

Q: What effect does calling the `alert` function have?

Answer:

The alert() function displays a pop-up message with the text "Hello world!".

Q: What effect does calling the `prompt` function have?

Answer:

The prompt() function displays a pop-up asking the user to enter some text such as their name.

Q: What is the return value of `prompt`?

Answer:

The return value depends on what the user does:

If the user types something and clicks OK, prompt() returns that text as a string and if the user clicks Cancel, prompt() returns null.

 -->