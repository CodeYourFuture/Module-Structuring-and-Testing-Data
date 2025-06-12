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

// `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`
//  pad is called three times 
// pad(totalHours)
// pad(remainingMinutes)
// pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// The first call is: ${pad(totalHours)}
// totalHours = (1 - 1) / 60 = 0 / 60 = 0
// So, pad(totalHours) becomes pad(0)
// Therefore, the value assigned to num is 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// pad(0) is called
// inside the function:
// num = 0
// num.toString() = "0"
// "0".padStart(2, "0") means make the string at least two characters long. 
// if it is shorter, add "0" at the beginning. 
// Since "0" is one character long, a "0" is added → "00"
// So, the return value is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

//  The last call is for seconds: pad(remainingSeconds)
//  remainingSeconds = 61 % 60 = 1, so the function call is pad(1)
//  Inside this call:
//  num = 1
//  num.toString() = "1"
//  "1".padStart(2, "0") = "01"
//  Therefore, the value assigned to num is 1


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

//  remainingSeconds = 1
//  pad(1) converts 1 into the string "1"
//  Then it pads it to two digits with "0" in front → "01"
//  This makes sure time values are always two digits like "01", "09", "12", etc., which is standard in time formatting (HH:MM:SS).
// So, the return value is "01"
