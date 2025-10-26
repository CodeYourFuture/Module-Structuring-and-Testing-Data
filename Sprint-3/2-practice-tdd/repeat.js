function repeat(str, count) {
  if (str === undefined || count === undefined){
    throw new Error ("argument must be defined")
  }
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }

  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeat;



