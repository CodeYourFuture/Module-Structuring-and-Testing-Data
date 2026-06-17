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

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

//---------------------------------------------------------------------------------------------

// Questions

//---------------------------------------------------------------------------------------------

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times.
// pad(totalHours)
// pad(remainingMinutes)
// pad(remainingSeconds)

//---------------------------------------------------------------------------------------------

// Call formatTimeDisplay with an input of 61, now answer the following:

//---------------------------------------------------------------------------------------------

// b) What is the value assigned to num when pad is called for the first time?
// 0
// remainingSeconds = 61 % 60 = 1
// totalMinutes = (61 - 1) / 60 = 1
// remainingMinutes = 1 % 60 = 1
// totalHours = (1 - 1) / 60 = 0
// First call: pad(totalHours)
// So, num = 0.

//---------------------------------------------------------------------------------------------

// c) What is the return value of pad is called for the first time?
// "00"
// num = 0
// numString = "0"
// Since numString.length is 1, the while loop runs once.
// "0" + "0" = "00"
// The function returns "00".

//---------------------------------------------------------------------------------------------

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1
// The last call to pad is pad(remainingSeconds).
// When seconds is 61, remainingSeconds is 61 % 60, which equals 1.
// Therefore, num is assigned the value 1.

//---------------------------------------------------------------------------------------------

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// "01"
// The last call is pad(1).
// Inside the function, 1 is converted to the string "1".
// Since its length is less than 2, a leading zero is added,
// making it "01".
// The function then returns "01".
