function repeat() {
  if (arguments[1] < 0) throw new Error("Count must be non-negative");
  return arguments[0].repeat(arguments[1]);
}
//other implementation
// function repeat(str, count) {
//   if (count < 0) {
//     throw new Error("Count must be non-negative");
//   }

//   let result = "";
//   for (let i = 0; i < count; i++) {
//     result += str;
//   }
//   return result;
// }

// module.exports = repeat;

// function repeat() {
//   const str = arguments[0];
//   const count = arguments[1];

//   if (count < 0) {
//     throw new Error("Count must be non-negative");
//   }

//   let output = "";
//   for (let i = 0; i < count; i++) {
//     output += str;
//   }

//   return output;
// }

module.exports = repeat;
