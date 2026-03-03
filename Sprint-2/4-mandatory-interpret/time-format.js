   return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));
console.log(formatTimeDisplay(6671));
console.log(formatTimeDisplay(832));


// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here: pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here: The value is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here: The return value is '00'.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: The value is 1 because 61 % 60 leaves 1 second remaining. 

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: The return value is '01' because return num.toString().padstart(2, '0') formats 1 into '01'.
