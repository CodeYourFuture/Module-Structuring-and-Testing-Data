function repeat(str, count) {
    if (count < 0) {
        throw new Error("Count must be non-negative");
    }
   return str.repeat(count)
  
}
module.exports = repeat;