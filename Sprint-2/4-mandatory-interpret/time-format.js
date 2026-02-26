function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; // 1
  const totalMinutes = (seconds - remainingSeconds) / 60; //1
  const remainingMinutes = totalMinutes % 60; // 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; //0

  console.log(totalHours + " " + remainingMinutes + " " + remainingSeconds);

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> Value assigned to num is '1' i.e. the value fo remaining seconds. As when in the program we did seconds % 60 we got the remaining seconds as 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the value assigned is '01' because when the function pad is called on the value 1, the padStart method inside that function applies the pad length of 2 using 0.
