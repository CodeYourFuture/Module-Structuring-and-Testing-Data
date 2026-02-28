function repeatStr(str, count) {
  if (typeof count !== "number" || count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  
  return result;
}

module.exports = repeatStr;
