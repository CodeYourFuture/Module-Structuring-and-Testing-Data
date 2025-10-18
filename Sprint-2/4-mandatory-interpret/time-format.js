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

Answer:  3

return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;

pad is called three times: for totalHours, remainingMinutes, and remainingSeconds.

So no matter what input we give to formatTimeDisplay, pad will always be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

Answer;

The first call is pad(totalHours).

const totalHours = (totalMinutes - remainingMinutes) / 60;

The value assigned to num when pad is called for the first time is 0.
Consequently, pad(0) will return '00', which ensures that the hour is formatted correctly in the final output string


// c) What is the return value of pad is called for the first time?
// =============> write your answer here

Answer; 1

return num.toString().padStart(2, "0");

num = 1

num.toString() = "1"

"1".padStart(2, "0") = "01"

If you call pad(0), the return value will be '00'.

If you call pad(1), the return value will be '01'.

If you call pad(5), the return value will be '05'.

If you call pad(10), the return value will be '10'



// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
Answer; 1

The last call is pad(remainingSeconds).

When you call format_time_display(61):

The calculations result in:

total_hours = 0
remaining_minutes = 1
remaining_seconds = 1


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
Answwer; 01


Third Call: pad(remaining_seconds) (where remaining_seconds = 1)

Value of num for the last call: 1

Return value: '01' 
