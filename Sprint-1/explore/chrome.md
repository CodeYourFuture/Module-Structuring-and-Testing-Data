Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myNname`

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

//answer undefined for alert function : hello world 
//The alert function is often used for:
Displaying messages to users  notifications, warnings...
Debugging purposes, to check values or flow in code during development.
 //prompt function answer :
 Immediate Feedback: It allows developers to gather information from users at specific points in the flow of the application.
 prompt:If the user enters a value in the input field and clicks the "OK" button, the prompt function returns that input value as a string.i put my name sara and i see  my name sara 
