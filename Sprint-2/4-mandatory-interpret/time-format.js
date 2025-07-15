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

formatTimeDisplay(61);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?

// pad() is called 3 times: Once for hours , Once for minutes and Once for seconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?

// 0: (1-1)/60

// c) What is the return value of pad is called for the first time?

// pad (0) = "00": as pad(num) is saying Make the string at least 2 characters long.

// If it’s too short, add "0" at the beginning.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

// remainingSeconds = seconds % 60
// seconds = 61
// 61%60  we will take the remainder which is 1 so the assigned value to num is 1
// % is called 	Division Remainder

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer

// pad(1)= "01"
// pad(1) will be changed to at least a two character string
