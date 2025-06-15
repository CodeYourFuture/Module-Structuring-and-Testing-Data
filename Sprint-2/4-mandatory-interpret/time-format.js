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
// The pad will called 3 times; 1. Once for totalHours.
// 2. Once for remainingMinutes. 3. Once for remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer is "0" cause the first call pad(totalHours) and then pad(0).

// c) What is the return value of pad is called for the first time?
//  Answer is "00" pad(0) then 0.toString() = "0" that leads to "0".padStart(2, "0") = "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer is "1" cause the last call is pad(remainingSeconds) then pad(1)
// remainingSeconds was 1 because 61 % 60 = 1
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer is "01" cause the pad(1) then 1.toString() = "1" leads to "1".padStart(2, "0") = "01.
// The finale output for formatTimeDisplay(61) is "00:01:01"