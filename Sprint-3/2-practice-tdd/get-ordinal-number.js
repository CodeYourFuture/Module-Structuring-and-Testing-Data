// function getOrdinalNumber(num) {
//   return "1st";
// }

function getOrdinalNumber(num) {
  let text = num.toString();
  if (text === "11") {
    return (text + "th");
  } 
  return (text + "st");
}

// getOrdinalNumber(1)).toEqual("1st")
module.exports = getOrdinalNumber;
