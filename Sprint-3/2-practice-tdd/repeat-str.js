function repeatStr(str, count) {
  if (typeof str !== "string")
    throw new Error("Please use a string i.e. 'Hello World'");

  if (!Number.isInteger(count))
    throw new Error("Please set count to an integer");

  if (count < 0) throw new Error("Please use a count of 0 or greater");

  return str.repeat(count);
}

module.exports = repeatStr;
