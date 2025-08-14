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
// ===> 3 times
// It is called once each for totalHours, remainingMinutes, and remainingSeconds within the return statement.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// ===> 0
// Calculation: `totalHours = (totalMinutes - remainingMinutes) / 60;`
// For `seconds = 61`:
// `remainingSeconds = 61 % 60 = 1`
// `totalMinutes = (61 - 1) / 60 = 1`
// `remainingMinutes = 1 % 60 = 1`
// `totalHours = (1 - 1) / 60 = 0`
// So, the first call is `pad(totalHours)`, which is `pad(0)`.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// ===> "00"
// Because `pad(0)` converts `0` to `"0"` and then `padStart(2, "0")` turns it into `"00"`.

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// =============> write your answer here
// ===> 1
// Explanation: The last call to `pad` is for `remainingSeconds`. For `seconds = 61`, `remainingSeconds` is calculated as `61 % 60`, which equals `1`. This `1` is the value passed to `num` in the last `pad` call.

// e) What is the return value assigned to num when pad is called for the last time in this program? Explain your answer
// =============> write your answer here
// ===> "01"
// Explanation: The `pad` function is called with `num = 1`. `num.toString()` converts `1` to the string `"1"`. Then, `padStart(2, "0")` pads `"1"` on the left with a "0" to ensure it has a length of 2, resulting in `"01"`.