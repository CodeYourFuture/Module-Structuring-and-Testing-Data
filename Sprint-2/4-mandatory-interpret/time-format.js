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
// =============> 3

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> Totalhours (pad(totalHours)})  The first call to pad(num) is for totalHours = 00.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01, the last pad call is for variable remaining seconds whose value is set for remainder of seconds which is parameter seconds.
//The remainder of seconds parameter in this instance which is 61 is 1 when it is called by pad function it's value will be set to 01 as we have user padStart(2,"0") method which makes sure the minimum digits we have as value is 2 and any missing digit will be replaces with 0 at the start.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> remainingSeconds = seconds % 60, this is the value that has been assigned to pad function's parameter for the last time.
//This ensures that parameter is calculated first and when we have the calculation for our parameter it will process the pad function that is configured with padStart method.
