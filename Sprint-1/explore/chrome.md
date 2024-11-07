Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
alert("Hello world");

What effect does calling the `alert` function have?
Answer:  The alert function displays a pop-up message with the text "Hello world!". 
        This is a blocking   pop-up, meaning it pauses other JavaScript execution until you click "OK" to close it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
prompt("What is your name?");


What effect does calling the `prompt` function have?
Answer: The prompt function opens a pop-up with an input field and a message "What is yourname".        -.      The user can type in a response and click "OK" to submit or "Cancel" to close

What is the return value of `prompt`?
Answer:  prompt returns the entered text as a string