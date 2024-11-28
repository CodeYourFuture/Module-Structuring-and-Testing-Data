Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
 *alert("Hello world")

What effect does calling the `alert` function have?
 *a pop-up dialog box will open

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
 *let myName = prompt("what is your name?")

What effect does calling the `prompt` function have?
 *a pop-up dialog box will open with input field to enter the input

What is the return value of `prompt`?
 *If I enter input and press OK, prompt return the value in the console or when we store it in variable it shows undifined. we can use console.log(myName) then we can see the return value

 *If I don't enter input and press Ok, it will return empty string ' ' or when we store it in variable it shows undifined. we can use console.log(myName) then we can see the return empty string

 *If I press cancel, it will return null