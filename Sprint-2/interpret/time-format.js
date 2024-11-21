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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called? 
  // first call of formatTimeDisplay without a parameter has 7 steps first set to undefined 
  // then navigating to the steps the value change to NAN. Last steps return TypeError: num.toString(...).padStart is not a function

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
    // undefined this value is from the remainingSeconds call
    // remainingSeconds	undefined

// c) What is the return value of pad is called for the first time?
    // = 1 remainingSeconds	value changed from undefined to 1
    // remainingSeconds	1
    
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
    // = 1, this is because remainingSeconds is calculated as seconds % 60, which in this case is 1
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
    // = 0 , the pad function set zero to the num because there is no remaining.