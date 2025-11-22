function repeat(str , count) {
  if (count < 0) {
    throw new Error("Count must be a non-negative integer");
  }
  if (count === 0) {
    return "";
  } 
  for (let i = 0; i < count; i++) { 
    return str.repeat(count);
  } 
}
  console.log(repeat("hello", -2));
  

module.exports = repeat;
