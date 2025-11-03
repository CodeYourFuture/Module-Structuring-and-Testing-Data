function getOrdinalNumber(num) {
  let result;
  let rem_100 = num % 100;
  let rem_10 = num % 10;
  if (rem_100 == 11 || rem_100  == 12 || rem_100  == 13){
    result = num.toString() + "th";
  }
  else if (rem_10 == 1){
    result = num.toString() +"st";
  }
  else if (rem_10 == 2){
    result = num.toString() + "nd";
  }
  else if (rem_10 == 3){
    result = num.toString() + "rd";
  }
  else {
    result = num.toString() + "th";
  }
      
  return result
}  
module.exports = getOrdinalNumber;
