// function pad(num) {
//   return num.toString().padStart(2, "0");
// }

function formatTimeDisplay(seconds) {
    const pad = num => num.toString().padStart(2, "0");
  const remainingSeconds = seconds % 60;

  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;

  const totalHours = (totalMinutes - remainingMinutes) / 60;
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay("697541"))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad will be called three times, hours, minutes and seconds 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0, there are no hours

// c) What is the return value of pad is called for the first time?
// =============> 00 hours

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> its 1 second

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> its 01 seconds
