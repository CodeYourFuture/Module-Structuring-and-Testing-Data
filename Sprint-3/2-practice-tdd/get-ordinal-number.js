function getOrdinalNumber(num) {
 
let result;

  if (num % 100 == 11 || num % 100 == 12 || num % 100 == 13){
    result = num.toString() + "th";
  }
  else if (num % 10 == 1){
    result = num.toString() +"st";
  }
  else if (num % 10 == 2){
    result = num.toString() + "nd";
  }
  else if (num % 10 == 3){
    result = num.toString() + "rd";
  }
  else {
    result = num.toString() + "th";
  }

  return result
} 

module.exports = getOrdinalNumber;
