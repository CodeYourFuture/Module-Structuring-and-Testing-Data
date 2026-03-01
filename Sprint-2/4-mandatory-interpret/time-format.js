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

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 (the first call is pad(totalHours), and totalHours is 0 when seconds = 61)

// c) What is the return value of pad when called for the first time?
// =============> "00" (0 becomes "0" then padStart(2,"0") makes it "00")

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// =============> 1 (the last call is pad(remainingSeconds), and 61 % 60 = 1)

// e) What is the return value assigned to num when pad is called for the last time in this program? Explain your answer
// =============> "01" ("1" is padded to two digits using padStart)