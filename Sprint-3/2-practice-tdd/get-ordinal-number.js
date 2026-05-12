function getOrdinalNumber(num) {
  if (!Number.isInteger(num) || num < 1) {throw new Error("Invalid number");}

  let number = num.toString().slice(-2);
  if (number == 11 || number == 12 || number == 13) {return `${num}th`;}
  if (number.slice(-1) == 1) {return `${num}st`;}
  if (number.slice(-1) == 2) {return `${num}nd`;}
  if (number.slice(-1) == 3) {return `${num}rd`;}
  else return `${num}th`;

}

module.exports = getOrdinalNumber;
