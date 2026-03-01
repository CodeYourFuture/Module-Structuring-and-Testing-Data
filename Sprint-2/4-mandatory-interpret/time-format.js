function pad(num) {
  return num.toString().padStart(2, "0");
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
// =============> write your answer here
// =============> pad will be called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> the value assigned to num is 0

// c) What is the return value of pad is called for the first time?
// =============> the return value of pad is called for the first time is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the value assigned to num is 1
// because the last time pad is called for the remainingSeconds holding the value 1
// return pad(remainingSeconds)
// function pad(1){

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the return value of pad is called for the last time is "01"
// because the argument passed to the pad parameter is the value of the remainingSeconds wich is 1
// function pad(1){
// return 1.toString().padStart(2, "0");
// return "1".pad(2,"0");
// return "01"
//}
