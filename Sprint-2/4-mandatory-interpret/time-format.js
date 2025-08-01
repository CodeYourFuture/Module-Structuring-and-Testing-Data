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
// =============> 3 times — once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> First time `pad` is called is with `totalHours`, which is 0. So `num = 0`.

// c) What is the return value of pad is called for the first time?
// =============> `pad(0)` returns `"00"` because it converts 0 to a string and pads it to two characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The last time `pad` is called is with `remainingSeconds`, which is `1` (since 61 % 60 = 1). So `num = 1`. This happens after calculating how many seconds are left over.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> `pad(1)` returns `"01"`. This is because `1` is converted to the string `"1"`, and then `.padStart(2, "0")` adds a zero in front to make it two digits.
