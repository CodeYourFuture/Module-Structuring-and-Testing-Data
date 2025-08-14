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

// You will need to play computer with this example - use the Python Visualiser  https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad will be called 3 times 
//This is because pad is used to format hours, minutes, and seconds into the HH:MM:SS format.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> num = 0
//The first call to pad is for totalHours, which is 0 because 61 seconds is less than an hour.

// c) What is the return value of pad is called for the first time?
// =============> "00"
// pad(0) converts 0 to a string ("0") and then .padStart(2, "0") adds a leading zero, resulting in "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> num = 1 
//The last call to pad is for remainingSeconds, which is 1 because 61 % 60 = 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> "01"
// pad(1) converts 1 to "1", then .padStart(2, "0") adds a leading zero, resulting in "01".
