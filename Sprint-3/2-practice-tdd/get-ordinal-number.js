function getOrdinalNumber(num) {
  if (typeof num !== "number" ||!Number.isInteger(num) || num === 0 ) {
    return NaN;
  }
 
  const lastDigit=Number(num.toString().slice(-1));
  const lastTwoDigits=Number(num.toString().slice(-2));


  if(lastTwoDigits>=10 && lastTwoDigits<=13){
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  }
  
  return `${num}th`;

}
console.log(getOrdinalNumber(-1))
module.exports = getOrdinalNumber;

