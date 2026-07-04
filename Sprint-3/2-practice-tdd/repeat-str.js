function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  } else if (count === 0) {
    return "";
  } else {
    return str.repeat(count);
  }
} 

module.exports = repeatStr;
