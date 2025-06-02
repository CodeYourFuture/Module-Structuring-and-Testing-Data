Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// a message with Hello world! message pops up in a small Chrome notification window 

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
// small Chrome window pops up with "What is your name?" and underneath it a space for the user to enter and submit their name.

What effect does calling the `prompt` function have?
//prompt expect input from the user by showing a small window with space for input to be submitted once called.
What is the return value of `prompt`?
//undefined
