Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
An alert message displays in chrome, the content of the message is the webpage or the website says the string i typed in an alert way.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
It allows you to input a value in box the browser displays, in this example myName was assigned using =  with a value i inputted after running the code.

What is the return value of `prompt`?
The string you input in the field. but after looking more into it,
there is an edge case where the user can click cancel in this situation the return value is null which means absences of value.
