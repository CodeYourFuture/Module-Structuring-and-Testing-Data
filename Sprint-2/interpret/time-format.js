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

formatTimeDisplay(61);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3

// Call formatTimeDisplay with an input of 61, now answer the following:

//b) What is the value assigned to num when pad is called for the first time?
//   The value assigned to num when pad is called for the first time is 0 (from pad(totalHours)).

//c) What is the return value of pad when it is called for the first time?
//   The return value of pad(0) is "00" because padStart(2, "0") ensures that it is 2 characters wide, padded with a leading zero.

//d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer.
//   The value assigned to num when pad is called for the last time is 1. This is because the last pad() call is for remainingSeconds, which is pad(1).

//e) What is the return value when pad is called for the last time in this program? Explain your answer.
//   The return value when pad is called for the last time (with 1 as input) is "01". This is because pad(1) converts 1 to a string and uses padStart(2, "0"), resulting in "01".