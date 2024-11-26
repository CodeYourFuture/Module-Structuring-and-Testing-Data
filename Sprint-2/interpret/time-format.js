function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  // a) `pad` is called 3 times.
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// Call formatTimeDisplay with an input of 61
formatTimeDisplay(61);

// Explanation of answers:

// b) For the first call to `pad`, `num` is `0`.
// This is because the first call to `pad` is for `totalHours`, which is `0`.

// c) The return value of the first call to `pad` is `"00"`.
// Since `num` is `0`, `pad(0)` returns `"00"` by padding `0` with a leading zero.

// d) For the last call to `pad`, `num` is `1`.
// The last call to `pad` is for `remainingSeconds`, which is `1`.
// This is because `remainingSeconds` is calculated as `61 % 60 = 1`.

// e) The return value of the last call to `pad` is `"01"`.
// The last return value of `pad` is `"01"` because `pad(1)` pads the single digit `1` with a leading zero.