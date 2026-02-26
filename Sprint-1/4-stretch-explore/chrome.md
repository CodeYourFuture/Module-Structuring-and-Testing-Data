Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
alert("Hello world!");

What effect does calling the `alert` function have? 
A popup modal appears with the String -> "Hello world!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myName = prompt("What is your name?"); 


What effect does calling the `prompt` function have?A modal appears with the "What is your name?" with an input field to enter your name. The input is then stored in the variable myName
What is the return value of `prompt`? My name stored in the variable myName
