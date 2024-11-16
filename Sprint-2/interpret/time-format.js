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
    // ~ pad function will also be called three times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
    // ~ The value assigned to num will be the argument value 61

// c) What is the return value of pad is called for the first time?
    // ~ The return value will be '01'

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
    // ~ The return value is 1 because the seconds input will subtract the remainingSeconds which is 1 and then divide the resultant value by 60, so the answer will give 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
    // ~ The return value is '01' because it will be calculating the remaining seconds which is 1 and as such the pad method will add 0 to it.
