function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// pad will be called 3 times. Inside the return statement of formatTimeDisplay, 
// pad is called once for totalHours, once for remainingMinutes, and once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: 0. Reason: The first evaluation in the template literal is pad(totalHours). 
// Since totalHours is 0, 0 is passed as the argument to num.

// c) What is the return value of pad is called for the first time?
// answer: "00". Reason: The while loop in pad checks if the length of numString is less than 2.
// Since numString is "0", the loop runs and adds a "0" to the front, making it "00". 
// The loop then checks again, and since the length is now 2, it exits and returns "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: 1. Reason: The last evaluation in the template literal is pad(remainingSeconds). 
// Since remainingSeconds is 1, 1 is passed as the argument to num.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// Answer: "01". Reason: The while loop in pad checks if the length of numString is less than 2.
// Since numString is "1", the loop runs and adds a "0" to the front, making it "01". 
// The loop then checks again, and since the length is now 2, it exits and returns "01".
