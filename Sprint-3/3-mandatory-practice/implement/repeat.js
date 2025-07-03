function repeat(str, count) {
    if (count === 0) return "";
    if (count < 0) {
      throw new Error("Not Allowed");
    } else {
      return str.repeat(count);
    }
  }
module.exports = repeat;