Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

 Answers: 
//1.While defining the function 'alert' with the argument"Hello world!" a new tab from google chrome apprears with the input that is: Hello world!
//2 The use of prompt with the input "what is your name?" when we run the code a new tab shows in which gives you space to answer the input's question.If you type your name it will be stored in the variable(myName)
3.If the user enters a value and clicks OK , prompt returns that value as a string. However, if s/he clicks CANCEL, prompt returns that value as null.


