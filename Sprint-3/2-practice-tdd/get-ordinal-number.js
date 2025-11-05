function getOrdinalNumber(num) {
  let result;
  let lastTwoDigits = num % 100;
  let lastDigit = num % 10;
  if (lastTwoDigits == 11 || lastTwoDigits  == 12 || lastTwoDigits  == 13){
    result = num.toString() + "th";
  }
  else if (lastDigit == 1){
    result = num.toString() +"st";
  }
  else if (lastDigit == 2){
    result = num.toString() + "nd";
  }
  else if (lastDigit == 3){
    result = num.toString() + "rd";
  }
  else {
    result = num.toString() + "th";
  }
      
  return result;
}  
module.exports = getOrdinalNumber;
