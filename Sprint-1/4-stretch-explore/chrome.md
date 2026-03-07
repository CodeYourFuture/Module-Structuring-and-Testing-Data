Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.
In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

It invokes the modal window and display Hello world

What effect does calling the `alert` function have?
It freezes the window till i click Ok before ii can make use of my computer

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
const myName=prompt(`"What is your name?"`)
return value myName=Edak

What effect does calling the `prompt` function have?
it invokes a modal window, and allows me to enter an input value
What is the return value of `prompt`?
it returns the value i entered "Edak"
if "Edak" is entered an cancelled it returns null