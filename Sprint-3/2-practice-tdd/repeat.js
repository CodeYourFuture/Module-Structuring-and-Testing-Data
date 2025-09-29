function repeat() {
  if (arguments.length !== 2) {
    throw new Error("Function requires exactly two arguments: str and count.");
  }

  const [str, count] = arguments;

  if (typeof str !== "string") {
    throw new Error("First argument must be a string.");
  }

  if (typeof count !== "number" || !Number.isInteger(count) || count < 0) {
    throw new Error("Second argument must be a non-negative integer.");
  }

  if (count === 0) {
    return "";
  }

  if (count === 1) {
    return str;
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

module.exports = repeat;
