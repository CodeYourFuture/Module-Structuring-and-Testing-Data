Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

I// invoke the function alert with an input string of "Hello world!";

// What effect does calling the alert function have?
// When the alert("Hello world!") function is called in the Chrome console,
// a popup dialog box appears in the browser window with the message:
//                Hello world!
// The user must click “OK” to close the alert and continue using the page.
// It pauses interaction with the page until it is dismissed.


// Now try invoking the function prompt with a string input of "What is your name?" - store the return value of your call to prompt in an variable called myName.
// let myName = prompt("What is your name?");

// What effect does calling the prompt function have?
// A dialog box appears asking the user to enter some text.
// The user sees the message:
//         What is your name?
// and there is a text input field and buttons OK and Cancel.

// What is the return value of prompt?
// The function returns a string containing whatever the user typed.
// For example, if the user typed Sisay and presses OK:
//         myName  // is now equal to "Sisay"
// (Also, if the user clicks "Cancel" or presses Escape, the function returns null.)