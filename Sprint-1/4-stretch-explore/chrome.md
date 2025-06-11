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


## What I Did in the Chrome Console

1. I opened a new page in Google Chrome.  
2. I right-clicked on the page and selected **Inspect**.  
3. In the Developer Tools window, I clicked on the **Console** tab.  
4. I typed the function `alert("Hello world!");` and pressed **Enter**.  
5. A pop-up appeared displaying the message **"Hello world!"**. I clicked **OK** to close it.  
6. Next, I typed `const myName = prompt("What is your name?");` and pressed **Enter**.  
7. A dialog box appeared with the message **"What is your name?"** and a text input field.  
8. I entered my name, **Sed**, into the input box and clicked **OK**.  
9. The browser stored my input in the variable `myName`.  
10. Then, I typed `console.log("You entered:", myName);` and pressed **Enter**.  
11. The console displayed: `You entered: Sed`

---

## What Effect Does Calling the `prompt()` Function Have?

It displays a dialog box that prompts the user to enter information.  
If the result is assigned (e.g., `const myName = prompt("What is your name?");`),  
the user's input is stored in the variable (in this case, `myName`).

---

## What Is the Return Value of `prompt()`?

The value entered by the user is returned as a **string**.  
If the user clicks **Cancel**, the return value is **`null`**.
