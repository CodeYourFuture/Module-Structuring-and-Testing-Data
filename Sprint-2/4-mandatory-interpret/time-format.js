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

console.log(formatTimeDisplay(61)); // Should print "00:01:01"

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// The pad function is called 3 times within formatTimeDisplay: once
// for totalHours, once for remainingMinutes, and once for 
// remainingSeconds. Therefore, pad will be called 3 times.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0 (totalHours) is assigned to num because 61 seconds is less than 
// 3600 seconds (1 hour), so totalHours is calculated as 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00" is the return value of pad because num is 0 because totalHours
// is 0, and the while loop in pad will add a "0" to the left of 
// numString until its length is at least 2. Since numString starts as
// "0", it will become "00" after one iteration of the loop, and then it
// will be returned as the final result of the first call to pad. Also,
// "0".length is 1, which is less than 2, so the loop will execute once,
// prepends "0" and makes "00". Now "00".length is 2, which is not less
// than 2, so the loop will stop and "00" will be returned.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// For seconds = 61,  the last call to pad is for remainingSeconds.
// AS calculated in (b), remainingSeconds is 1. So the value assigned
// to num when pad is called for the last time is 1. This is because
// remainingSeconds is calculated as seconds % 60, which gives the
// remainder of 61 divided by 60, resulting in 1. Therefore, num is
// assigned the value of 1 during the last call to pad in this program.


// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// As calculated in (d), num is 1. The pad function converst num to
// a string ("1") and then checks its length. Since the length is 1,
// it prepends "0" to make it to "01". So, the return value of pad
// when called for the last time is "01". This is because the while loop
// in pad will execute once. 
