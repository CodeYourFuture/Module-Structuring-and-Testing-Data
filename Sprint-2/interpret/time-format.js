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
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 〰️ pad will be called three times—once for each of totalHours, remainingMinutes, and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// 〰️ The first call to pad is for totalHours, which is 0. So, num is assigned the value 0 during the first call.

// c) What is the return value of pad is called for the first time?
// 〰️ When pad(0) is called, it returns "00" because padStart(2, "0") ensures the output has two characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 〰️ The last call to pad is for remainingSeconds, which is 1. So, num is assigned the value 1 during the last call.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// 〰️ When pad(1) is called, it returns "01" because padStart(2, "0") pads the single digit 1 to make it two characters ("01").