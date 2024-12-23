function pad(num) {
  console.log(num);
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

/*
You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
to help you answer these questions

Questions

a) When formatTimeDisplay is called how many times will pad be called?
    - 3 times, pad is called three times, once for each part of the time: hours, minutes, and seconds.

Call formatTimeDisplay with an input of 61, now answer the following:
   

b) What is the value assigned to num when pad is called for the first time?
    - 0, because the first pad is totalHours and we don't have any hours yet, only minutes

c) What is the return value of pad is called for the first time?
     - "00" and calling formatTimeDisplay(61) = 00:01:01

d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
    - In this case, the value of num before it is passed to pad is 1 (the remainder when 61 are divided by 60).

e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
    - After pad processes 1, it will return the value "01" because it ensures the number is two digits long (by adding a leading zero)
*/
