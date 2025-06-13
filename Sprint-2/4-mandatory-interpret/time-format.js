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
// =============> write your answer here
/* To check how many times the pad function is called within the formatTimeDisplay function, the 
code can be looked up closely to determine that. In formatTimeDisplay, there are the following calls to pad:

pad(totalHours) - called once to format the hours.
pad(remainingMinutes) - called once to format the remaining minutes.
pad(remainingSeconds) - called once to format the remaining seconds.
So, the pad function will be called three times each time formatTimeDisplay 
is executed, regardless of the input value for seconds.*/

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
/* When 61 is called as an input for formatTimeDisplay this is what happens:
 formatTimeDisplay(61);
 const remainingSeconds= 61 % 60; the answer is 1
 const totalMinutes= (61 - 1) / 60; answer is 60 / 60 = 1
 const remainingMinutes= 1 % 60; answer 1
 const totalHours+ (1-1) /60; 0 /60 answer is 0
what is returned is :
return `${pad(0)}:${pad(1)}:${pad(1)};
The value of num when pad is called is 0
when pad(0)
the value of num is 0 */

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
/* in the function pad(num){
return num.toString().padStart(2,"0");
if num = 0
0.toString  is "0"
"0".padStart(2, "0") is "00"
So the return value of pad(0) is 
"00" */

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* the value assigned to num when pad is called the last time is 1
The last call is pad(remainingSeconds)
when seconds = 61
the remainingSeconds = 61 % 60 =1
pad is called three times:
pad(totalHours) pad(0)
pad(remainingMinutes) pad(1)
pad(remainingSeconds) pad(1)*/


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* pad is called three time in the return statement  formatTimeDisplay
return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
- according to this line the last calling for pad will be remainingSeconds.
-The value of remainingSeconds is:
 const remainingSeconds = seconds % 60; is the remainder when the total seconds divided by 
 60.
-the last call for pad(remainingSeconds) and as a result the value assigned to num is the 
last call to pad : 
num = seconds % 60
- the pad function here returns the conversion of the number to a string and padding it with a 
leading zero to the left if it's a single digit:
function pad(num) {
  return num.toString().padStart(2, "0");
}
   If num is less than 10, it becomes "0" + num.
   Otherwise, it remains the same but as a string.
   e.g if num = 61
   
If seconds = 61:
remainingSeconds = 61 % 60 = 1
pad(1) returns "01"

*/
