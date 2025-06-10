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

console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// When formatTimeDisplay is called, pad will be called 3 times: once for totalHours, 
// once for remainingMinutes, and once for remainingSeconds.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// When pad is called for the first time, the value assigned to num is 1. 
// This is because totalHours is calculated as (61 - 1) / 60, which equals 1.
// The totalHours is 1, so pad is called with 1.


// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time with num = 1 is "01". The padStart method pads the string representation of 1 with a leading zero to ensure it has at least 2 characters.
function pad(num) {
  return num.toString().padStart(2, "0");
} 


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// When pad is called for the last time, the value assigned to num is 1. This is because remainingSeconds is calculated as 61 % 60, which equals 1.
// The remainingSeconds is 1, so pad is called with 1 for the last time, resulting in "01" as the return value.


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time is "01". This is because the remainingSeconds is 1, and the pad function pads it with a leading zero to ensure it has at least 2 characters.
// Therefore, the final output of formatTimeDisplay(61) will be "00:01:01", where each component is padded to two digits.
// The final output of formatTimeDisplay(61) is "00:01:01", where:
// - totalHours is 0 (padded to "00"),
// - remainingMinutes is 1 (padded to "01"),

