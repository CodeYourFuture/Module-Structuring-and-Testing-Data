function getOrdinalNumber(num) {
  const lastDigit=Number(num.toString().slice(-1));
  const lastTwoDigits=Number(num.toString().slice(-2));

  if(typeof num !=="number"){
    return NaN;
  }

  if(lastTwoDigits>=10 && lastTwoDigits<=13){
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (num === 3) {
    return "3rd";
  }
  
  return `${num}th`;

}

module.exports = getOrdinalNumber;

