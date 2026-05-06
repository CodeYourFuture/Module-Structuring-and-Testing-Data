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
console.log(formatTimeDisplay(61));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//when the function formatTimeDisplay when is called, the pad function will call 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The assign value to num when it first call is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad for the first time is 0.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

<<<<<<< comparisons-assertions-breaking-down-problems-sprint-2
/*The assign value to num when the function pad when it 
last called will be 1. Because when the pad function called for the third time, it will
receive the value from the variable remainingSeconds(seconds % 60 = 1);
*/

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
=======
// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
>>>>>>> main
// =============> write your answer here
/*
the assign return value to num when the function pad when it last called will be 01,
because the when the value remainingSeconds pass into the pad function. It will 
turn into string that will be add and combine "0" into the string "1" to the left because the padStart method check the total 
length of the string "1"  and it is less then 2.
*/