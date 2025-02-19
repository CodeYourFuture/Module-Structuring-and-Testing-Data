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
/* in Python:
def pad(num):  # Changed { to :
  # Since we are using Python, we can't use toString() or padStart() directly.
  # We will use string formatting instead.
  return f"{num:02d}"  # Returns a string with leading zeros if necessary

def formatTimeDisplay(seconds):
  remainingSeconds = seconds % 60
  totalMinutes = seconds // 60  # Using Python's floor division operator (//)
  remainingMinutes = totalMinutes % 60
  totalHours = totalMinutes // 60

  return f"{pad(totalHours)}:{pad(remainingMinutes)}:{pad(remainingSeconds)}"

print(formatTimeDisplay(61))  # "00:01:01"
print(formatTimeDisplay(3661))  # "01:01:01"
print(formatTimeDisplay(86399))  # "23:59:59"
print(formatTimeDisplay(3600))  # "01:00:00"
print(formatTimeDisplay(0))*/
// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// 3 times.
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//The first call to pad() occurs with totalHours, which is 0.
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// pad(0);  "0".padStart(2, "0") →answer "00"
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/*The last call to pad() happens with remainingSeconds.
In our case, remainingSeconds = 1. Answer: 1*/
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// pad(1); It is "01"
function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = Math.floor(seconds / 60);
  const remainingMinutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61)); // "00:01:01"
console.log(formatTimeDisplay(3661)); // "01:01:01"
console.log(formatTimeDisplay(86399)); // "23:59:59"
console.log(formatTimeDisplay(3600)); // "01:00:00"
console.log(formatTimeDisplay(0)); // "00