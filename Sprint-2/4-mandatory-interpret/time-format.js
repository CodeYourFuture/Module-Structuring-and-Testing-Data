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
formatTimeDisplay(60);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 times 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> .is 0 ,because totalHours = 0 at that point.

// c) What is the return value of pad is called for the first time?
// =============> is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============>  num = 1 ,because last call to pad is for remainingMinutes, which is = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============>  "01"  because pad(1) converts 1 to a string and pads it to two digits, resulting in "01"
