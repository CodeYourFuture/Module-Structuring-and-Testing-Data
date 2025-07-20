// function getOrdinalNumber(num) {
//   //get the absolute value and turn into string
//   let myNum = Math.abs(num).toString();
//   let myNumLastChar = myNum.at(-1);

//   if (myNum < 10) {
//     if (myNum === "1") return `${num}st`;
//     else if (myNum === "2") return `${num}nd`;
//     else if (myNum === "3") return `${num}rd`;
//     else return `${num}th`;
//   } else if (myNum >= 10) {
//     if (myNumLastChar === "1") return `${num}st`;
//     else if (myNumLastChar === "2") return `${num}nd`;
//     else if (myNumLastChar === "3") return `${num}rd`;
//     else return `${num}th`;
//   }
// }

function getOrdinalNumber(num) {
  const lastTwo = num % 100;
  const lastDigit = num % 10;

  if (lastTwo >= 11 && lastTwo <= 13) {
    return `${num}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
