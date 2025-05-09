function formatAs12HourClock(time) {
    const hours = Number(time.slice(0, 2));
    if (hours > 12) {
      return `${hours - 12}:00 pm`;
    }
    return `${time} am`;
  }
  
  const currentOutput = formatAs12HourClock("08:00");
  const targetOutput = "08:00 am";
  console.assert(
    currentOutput === targetOutput,
    `current output: ${currentOutput}, target output: ${targetOutput}`);


    const currentOutput2 = formatAs12HourClock("23:00");
  const targetOutput2 = "11:00 pm";
  console.assert(
    currentOutput2 === targetOutput2,
    `current output: ${currentOutput2}, target output: ${targetOutput2}`
  );

 const currentOutput3 = formatAs12HourClock("16:00");
const targetOutput3 = "4:00 pm";
console.assert(currentOutput3===targetOutput3,
    `current output: ${currentOutput3}, target output:${targetOutput3}`
);

  //Exercises:

//   Work out what the parts of this line mean.
// c:\Users\hatef\Desktop\CYF\Module Structuring and Testing Data\Module-Structuring-and-Testing-Data\Sprint-2\prep\Clock.js:10
// Everything before the colon : is the directory of the file that is getting executed, the number after the colon is the line that is causing the problem, in this case is line 10


// Why are they different on my computer than yours?
//because the file directory path is different in your PC and because the line that is causing the issue is in different line on your file.


// How can we use both pieces of information?
// We can know the location of the file from the first part and the line that is causing the error in the second part.

//Write down three ways you could find out what this means: By searching online such as stackOverflow, and W3School. By asking Chat GPT and by asking a colleague and an expert.

// What does this line Node.js v22.13.0 mean? Why might it be useful to know this information? That the execution was run by Node.js version 22.13.0
// Add your answer to your spaced repetition calendar. Your understanding of this will grow over time. Answer the question again in the future, and compare it to your previous answer.


// For each word in this error message-SyntaxError: Identifier 'currentOutput' has already been declared, write down what it means. 
// If you don’t know a word, look it up.
// Make sure you understand each word. Make sure you could explain the word to someone without reading the answer to them.
// This means there is a mistake in the way the code is written.
// "Syntax" refers to the rules of a programming language, and an "Error" means something is wrong.
// An identifier is the name of a variable, function, or object in code.
// Example: In let age = 25;, age is the identifier.
// 'currentOutput' This is the specific identifier (variable name) in the error message.The error is related to this variable.
// declared
// In programming, "declaring" means creating a variable using let, const, or var.
// Example: let x = 10; declares a variable x.
// The error means currentOutput was already declared earlier, and we can’t declare it again with let or const.

// // ✏️ Write another assertion that checks formatAs12HourClock returns the target output when passed another time input in the afternoon.