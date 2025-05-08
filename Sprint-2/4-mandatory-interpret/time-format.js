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
// =============> write your answer here:  three times because: When calling formatTimeDisplay(61), the function breaks down the seconds value into hours, minutes, and seconds.
// Each part of the time display—hours, minutes, and seconds—needs to be formatted with two digits.
//  Since formatTimeDisplay always includes all three time components, pad is called three times regardless of the input



// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61))

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here:0 because: The value assigned to num when pad is called for the first time is 0, because totalHours is 0 based on the time conversion calculations.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: "01"

// In the formatTimeDisplay function, the pad function is called for each part of the time format:
// Hours: pad(totalHours)
// Minutes: pad(remainingMinutes)
// Seconds: pad(remainingSeconds)
