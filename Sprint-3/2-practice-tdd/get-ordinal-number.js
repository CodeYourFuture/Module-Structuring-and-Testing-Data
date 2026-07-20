function getOrdinalNumber(num) {
  let output;
  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
    output = `${num}th`;
  } else if (num % 10 === 1) {
    output = `${num}st`;
  } else if (num % 10 === 2) {
    output = `${num}nd`;
  } else if (num % 10 === 3) {
    output = `${num}rd`;
  } else {
    output = `${num}th`;
  }
  return output;
}

module.exports = getOrdinalNumber;

//check if code runs
console.log(getOrdinalNumber(1));
