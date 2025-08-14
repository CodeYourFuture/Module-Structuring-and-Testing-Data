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
//   3 times
 //(Once each for totalHours, remainingMinutes, and remainingSeconds)



// Call formatTimeDisplay with an input of 61, now answer the following:
//console.log(formatTimeDisplay(61)); //result is "00:01:01"

// b) What is the value assigned to num when pad is called for the first time?
//    0
  //(The value of totalHours)



// c) What is the return value of pad is called for the first time?
// "00"
//(0.toString().padStart(2, "0") → "00")

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//  1
//The value assigned to num when pad is called for the last time is 1. This is because the function takes an input of 61 
// and the remainingSeconds variable takes the remainder when 61 is divided by 60 .or in other words the number of seconds left after dividing 61 seconds into full minutes

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// "01"
//(1.toString().padStart(2, "0") → "01")
