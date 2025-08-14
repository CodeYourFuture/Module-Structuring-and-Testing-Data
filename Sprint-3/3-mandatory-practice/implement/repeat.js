function repeat(str, count) {
    if (count < 0) throw new Error("Error");
    return str.repeat(count);
  
}

module.exports = repeat;