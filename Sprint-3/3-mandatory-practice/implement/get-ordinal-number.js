function getOrdinalNumber(num) {
    if (isNaN(num)) {
      return NaN;
    }
     
const strNum=String(num);
const lastDigit=Number(strNum.slice(-1));
const lastTwoDigits=Number(strNum.slice(-2));

if (lastTwoDigits >= 11 && lastTwoDigits <=13) return num + "th";

if(lastDigit===1)return num + "st";
    
if ( lastDigit===2)  return num + "nd";
 
 if (lastDigit === 3) return num + "rd";

 return num+"th"
  
}


module.exports = getOrdinalNumber;


