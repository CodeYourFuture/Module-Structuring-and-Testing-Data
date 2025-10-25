function getOrdinalNumber(num){

  let last =num % 10; 

  let lastTwo =num % 100;

  if(lastTwo >= 11 && lastTwo<= 13){

    return num +"th";
  }
  
  if (last ===1)return num +"st";

  if (last ===2)return num +"nd";

  if (last ===3)return num +"rd";

  return num +"th";
}

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(13));

module.exports = getOrdinalNumber;
