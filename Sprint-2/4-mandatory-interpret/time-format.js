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

console.log(formatTimeDisplay(61))
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad function will be called three times.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> '0'

// c) What is the return value of pad is called for the first time?
// =============> '00'
// d) What is the value assigned to num when pad is called for the second time in this program?  Explain your answer
// =============> The assigned value to num is 1, this because of the remainder operator we used
//                Moreover, The remainder operator gives you what's left over 
//                after you divide one number by another.



// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is '01' because when we called the pad function with the "remainingSeconds" parameter
//                value which is 1, then using the pad function we convert 1 to string 
//                then padding this string in the start by 0 to make the length of this string to be 2

