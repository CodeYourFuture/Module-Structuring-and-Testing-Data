function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//Pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//the total hours is assigned to pad at the first run, which is equal to 0

// c) What is the return value of pad is called for the first time?
//The return value of pad is "00" as it adds a 0 to the front of a non 2 digit value

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//value of num at the last call is 1 because when we look at 61 seconds a minute makes 60 seconds and the remaining seconds when we subtract 60 from 61 is 1 second.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// After we have one second we send it to pad which adds a 0 in front of the one since it is an individual number. Num is then "01"