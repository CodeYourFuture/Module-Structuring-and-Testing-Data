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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> Three times: 
// pad(totalHours)
// pad(remainingMinutes)
// pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 for totalHours

// c) What is the return value of pad is called for the first time?
// =============> 0 for totalHours, which is then converted to "00" by the padStart 
// method because the string length of "0" is less than 2

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 for remainingSeconds; it is the num parameter, not the string

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The string "01" because the string length of "1" is less than 2

// By the way - the Python visualiser didn't want to work with this. It said:
// File "<string>", line 1
//    function pad(num) {
//              ^^^
// SyntaxError: invalid syntax 

// I asked Claude.ai to help instead 