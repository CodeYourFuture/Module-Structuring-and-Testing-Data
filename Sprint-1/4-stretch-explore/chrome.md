Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;


What effect does calling the `alert` function have?
// By invoking  alert("Hello world!"); the effect it has is that a small modal dialog box pops up at the top of  the window browser displaying Hello world!, along with an OK button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
//The effect is similar to the alert one a small modal dialog box pops up  with the addition of a text input field and two buttons for 'OK' and 'Cancel', it displays the question What is your name?
What is the return value of `prompt`?
//The return value of the 'prompt' depends on what action the client did , whci is one of two things based on the client actions.it will return whatever the client typed into the text field as string and click 'OK' and this will be stored in the variable myName, and can be verified by typing myName into the console and hitting ENTER.However if the user clicks cancel , it returns null.
