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
console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called? three times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time? 0

// c) What is the return value of pad is called for the first time? "00"

// d) What is the value assigned to num when pad is called for the last time in this program? The last call to pad in this program is for remainingSeconds, which is 1.

//The pad function is called on remainingSeconds to ensure it has two digits.



// e) What is the return value assigned to num when pad is called for the last time in this program? When pad(1) is called, num is "1", and padStart(2, "0") will add a leading zero to make it two digits:

//pad(1) returns "01"
//So, the return value of pad for the last call is "01". This is because padStart adds a leading zero to single-digit numbers to make them two digits long.







