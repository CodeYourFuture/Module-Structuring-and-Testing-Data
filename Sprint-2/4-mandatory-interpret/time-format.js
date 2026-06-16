function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
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

console.log(formatTimeDisplay(61));





 Questions

 a) When formatTimeDisplay is called how many times will pad be called?
3 time. 


b) What is the value assigned to num when pad is called for the first time?
 =============> parameter



 c) What is the return value of pad is called for the first time?
 =============> numString variable



 d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
 =============> 



e) What is the return value of pad when it is called for the last time in this program? 


The three functions of pad are called 
 in three variables totalMinutes, remainingMinutes and totalHours.
The last variable in the pad function is called remainingSeconds;


// =============> 
