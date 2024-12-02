function repeatSTR(string, count) {
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  return string.repeat(count);
}

module.exports = repeatSTR;
