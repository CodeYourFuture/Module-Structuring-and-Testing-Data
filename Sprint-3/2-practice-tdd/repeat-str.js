function repeatStr(str, count) {
  if (count === 0) {
    return "";
  } else if (count === 1) {
    return str;
  } else if (count > 1) {
    return str.repeat(count);
  } else {
    throw new Error("Count cannot be a negative number");
  }
}
// I can make the 3 valid cases in 1 case with the repeat method as folows:
// function repeatStr(str, count) {
//   if (count >= 0) {
//     return str.repeat(count);
//   } else {
//     throw new Error("Count cannot be a negative number");
//   }
// }

module.exports = repeatStr;
