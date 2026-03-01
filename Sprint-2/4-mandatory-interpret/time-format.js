function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return  `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualizer https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// ans: 3 times
// Call formatTimeDisplay with an input of 61, now answer the following: 

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here  : 0
// c) What is the return value of pad is called for the first time? 
// =============> write your answer here value : 00 

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : 1 When formatTimeDisplay(61) is called, the value 61 is passed as the argument to seconds.
// Then remainingSeconds is calculated using seconds % 60, which gives 1.
// The last call to pad is pad(remainingSeconds).
// Since remainingSeconds is 1, the value assigned to num in the last call is 1.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : 01 When formatTimeDisplay(61) is called, the value 1 is passed to pad during the last call because remainingSeconds equals 1.
// Inside the pad function:
// The number 1 is converted to a string.
// padStart(2, "0") ensures the string has at least two characters.
// Since "1" has only one character, a "0" is added to the beginning.
// So "1" becomes "01".
// This ensures the time format follows the 00:00:00 structure.