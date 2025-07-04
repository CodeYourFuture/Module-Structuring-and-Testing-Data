function repeat(str, count) {
  if (count < 0) {
    throw new Error("Negative integer not accepted.");
  }

  let total = "";
  for (let i = 0; i < count; i++) {
    total += str;
  }

  return total;
}

module.exports = repeat;
