function repeat(str, count) {
  if (str === undefined) {
    throw new Error("String must be defined");
  }
  if (str === null || typeof str !== "string") {
    throw new Error("String must be a valid string");
  }

  if (count === undefined || typeof count !== "number") {
    throw new Error("Count must be a number");
  }

  if (count < 0 || !Number.isInteger(count)) {
    throw new Error("Count must be a non-negative integer");
  }

  if (str === "" || count === 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeat;
