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

/* You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
to help you answer these questions

Questions

a) When formatTimeDisplay is called how many times will pad be called?
=============> 

3 times - Once each for hours, minutes, and seconds

Call formatTimeDisplay with an input of 61, now answer the following:
b) What is the value assigned to num when pad is called for the first time?
=============> 

'0' because when num = 61 the total hour count is '0'  |  const totalHours = (totalMinutes - remainingMinutes) / 60;  |   (1 - 1) / 60 = 0 / 60 = 0

c) What is the return value of pad is called for the first time?
=============> 

pad(0) returns "00" because num.toString() converts 0 to "0"  then  .padStart(2, "0") adds a leading zero, making it "00" 

d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
=============> 
 
The value assigned for the last call is '1' because when seconds = 61 --> remainingSeconds = 61 % 60 = 1  
  
e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
=============> 

The last call is pad(remainingSeconds), where 'remainingSeconds' = seconds % 60;  --> 1 then the .padStart(2, "0") formatting is applied to make '01'
*/
