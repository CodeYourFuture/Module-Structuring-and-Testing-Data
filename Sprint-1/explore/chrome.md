Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

---------- alert("hello Maria");
---------------Hello Maria

What effect does calling the `alert` function have? show a window with the alert at the top of the browser

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

--------- prompt("What is your name?");  //maria
--------- var myName = prompt("What is your name?");
-------------  Maria

What effect does calling the `prompt` function have?

 //prompt will display a dialog text box to interact wit the user, this can be used to ask question and then stored in one variable. this can have two option "ok" and "cancel", if cancel is pressed nothing will run. and this will be "undefine".

   
What is the return value of `prompt`?  

 //If the user enters a name and clicks "OK," the input text is stored in the variable myName.

