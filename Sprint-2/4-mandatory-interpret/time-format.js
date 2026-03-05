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
// =============> pad will be called 3 times, once for pad(totalHours, 
// once for (pad)remainingMinutes and once for (pad)remainingSeconds


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The first call to pad is pad(totalHours).
//totalHours is calculated as totalMinutes // 60.
//For the input 61, seconds is 61, remainingSeconds is 1, and totalMinutes is 1.
//So, totalHours is 1 // 60 = 0.
//Therefore, num is assigned the value 0 when pad is called for the first time.


// c) What is the return value of pad is called for the first time?
// =============> The first call to pad is pad(totalHours).
//totalHours is calculated as totalMinutes // 60.
//For the input 61, totalMinutes is (61 - 1) // 60 = 1.
//So, totalHours is 1 // 60 = 0.
//pad(0) returns the string representation of 0, padded with zeros to a minimum length of 2, which is "00".


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> We look at the last call to pad, which is pad(remaining_seconds).
//remaining_seconds is calculated as seconds % 60.
//For the input 61, seconds % 60 equals 1.
//So, pad(remaining_seconds) is equivalent to pad(1). The value assigned to num in the last call to pad is 1.


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> For the input 61, remaining_seconds will be 1. So, pad(1) will return "01". 
// Therefore, the value assigned to num is 1.
