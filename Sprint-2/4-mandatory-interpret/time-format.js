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

// =============> Questions <=============

// a) When formatTimeDisplay is called how many times will pad be called?
// Answer: 3 times during ${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}

// Call formatTimeDisplay with an input of 61, now answer the following:
// b) What is the value assigned to num when pad is called for the first time?
// Answer: 0. The first call is at pad(totalHours) when totalHours = 0

// c) What is the return value of pad is called for the first time?
// Answer: "00" since we add padding of "0" at the start for a string of minimum length 2

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: 1 since the last time pad is called is in pad(remainingSeconds) (and remainingSeconds = 1)

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: "01" since pad(1) returns "01"
