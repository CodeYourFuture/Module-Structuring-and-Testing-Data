Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

1. This function displays a pop-up box with Hello world written on it, with on OK button.  

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

2. It displays a pop-up box with What's your name written on it and an empty dialog box inside, awaiting my input.
Also, there are two options of OK and Cancel. 

What is the return value of `prompt`?

3. If I enter my name undefined appears, same if i press the cancel button. Fixed this by adding myName at the end.
Now the value when i enter my name shows "my name", if i press cancel it shows "null".
