function pad(num) {                         //1)num=0, 2)num=0 3) num=1
  let numString = num.toString(); // (last time)     numString = "1"
  while (numString.length < 2) {                     //"01" it will return 01      
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) { 
  const remainingSeconds = seconds % 60; //61%60 = 1
  const totalMinutes = (seconds - remainingSeconds) / 60; //1-1=0
  const remainingMinutes = totalMinutes % 60; //0
  const totalHours = (totalMinutes - remainingMinutes) / 60; // 0

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`; 
  // 
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//3 in console.log
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//0
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//"00"
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
////1)num=0, 2)num=0 3) num=1, when num is called for last time that is when pad(remainingSeconds),
//here remainingseconds value = 1 so num is assigned with value of 1
// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
//when pad called for the last time, the value of num is 1 
//it will convert into string by toString method "1" as its less than 2, it satisfies the while loop condition and,
// will concatenate with "0" the final value of variable numString would be "01", and will return "01".
