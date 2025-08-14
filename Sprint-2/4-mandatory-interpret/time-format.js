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
// The `pad` function will be called 3 times. This is because the return statement in `formatTimeDisplay` calls `pad` for `totalHours`, `remainingMinutes`, and `remainingSeconds`.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to `num` will be `0`.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value will be the string `"00"`.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to `num` will be `1`.
// With an input of 61, `remainingSeconds` is calculated as `61 % 60`, which is `1`.
// The last call to `pad` in the `return` statement uses `remainingSeconds` as its argument.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value will be the string `"01"`.
// The `pad` function takes the number `1`, converts it to the string `"1"`, and then uses `padStart(2, "0")` to add a leading zero, resulting in `"01"`.
