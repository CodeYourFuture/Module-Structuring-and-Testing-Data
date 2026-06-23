Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// Answer : invoking alert function with "Hello World" string as an input shows a new smaller window where is says
"chrome://new-tab-page says
Hello World
Trying to run the same function with any other parameter prints other parameter to the screen, which makes me realise that the function is already predefined in the V8 somewhere.
//

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?
// Answer: Running prompt function prompts my to enter my name and then prints it to the console. Which means that prompt function is aready predefined and has input functionality and probably console.log() inside the function.
//
