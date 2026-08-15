// function getOrdinalNumber(num) {
//   return "1st";
// }

function getOrdinalNumber(num) {
    let text = num.toString();

  if (Math.abs(num) >= 11 && Math.abs(num) <=13) {
  return (text + "th")
  } else if (text.slice(-1) === "1") {
  return (text + "st")
  } else if (text.slice(-1) === "2") {
  return (text + "nd")
  } else if (text.slice(-1) === "3") {
  return (text +"rd")
  };

  return (text + "th");
}

// getOrdinalNumber(1)).toEqual("1st")
module.exports = getOrdinalNumber;
