function repeat(str, count) {
  if (count < 0) {
    return "Invalid Input";
  }
  return `${str}`.repeat(count);
}





module.exports = repeat;