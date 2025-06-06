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
/*
when the function is returned pad will be called 3 times - for totalHours, remainingMinutes and remainingSeconds
*/

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61)); //result is "00:01:01"

// b) What is the value assigned to num when pad is called for the first time?
// When pad is called for the first time the value assigned to num is "0"  as num is 61 which is the same as 61 seconds which means the hours were 0.

// c) What is the return value of pad is called for the first time?
/*
 When pad is called for the first time the return value is formatted to "00" based upon the code in the pad function (num.toString().padStart(2, "0") - it converts the number to a string and adds "0" to the left of the string, if the original string is less than 2 characters, until it is 2 characters long)
*/

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
The value assigned to num when pad is called for the last time is 1. This is because the function takes an input of 61 and the remainingSeconds variable takes the remainder when 61 is divided by 60 or in other words the number of seconds left after dividing 61 seconds into full minutes (which is 1 minute with 1 second remaining)
*/

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
When pad is called for the last time the return value assigned to num is "01" because as noted earlier  the code in the pad function (num.toString().padStart(2, "0") converts the number to a string and adds "0" to the left of the string, if the original string is less than 2 characters, until it is 2 characters long.
*/
