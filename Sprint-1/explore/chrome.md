Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have? 
alert(`${"Hello world!"}`)
it has a pop up alert banner.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
const myName =  prompt(`${"What is your name?"}`)
alert(`Hello, ${myName}`);


What effect does calling the `prompt` function have?
What is the return value of `prompt`?
It gives me an input field where im able to type my name and it will return that value which is my name.
