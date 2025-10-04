function repeat(str, count) {
  if ((Number(count) < 0) | (typeof str === "object")) {
    throw new Error("Invalid data value");
  }
  try {
    return String(str).repeat(Number(count));
  } catch (error) {
    throw new Error("Invalid data value");
  }
}

module.exports = repeat;
