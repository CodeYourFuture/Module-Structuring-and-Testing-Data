function getOrdinalNumber(num) {
  //get the absolute value and turn into string
  let myNum = Math.abs(num).toString();
  let myNumLastChar = myNum.at(-1);
  if (myNum < 10) {
    if (myNum === "1") return `${num}st`;
    else if (myNum === "2") return `${num}nd`;
    else if (myNum === "3") return `${num}rd`;
    else return `${num}th`;
  } else if (myNum >= 10) {
    if (myNumLastChar === "1") return `${num}st`;
    else if (myNumLastChar === "2") return `${num}nd`;
    else if (myNumLastChar === "3") return `${num}rd`;
    else return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
