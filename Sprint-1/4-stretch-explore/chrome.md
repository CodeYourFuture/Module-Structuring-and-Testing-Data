Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
done

What effect does calling the `alert` function have?
shows a popup message with the words "Hello world"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
I get a popup prompt asking me to put in my name, the consol there throws a underfined.

What effect does calling the `prompt` function have? calling the prompt function will show the user a popup in the browser asking the user for information.
What is the return value of `prompt`? I did not see the expected value that was collected via the prompt I got a underfined  in the console. 
