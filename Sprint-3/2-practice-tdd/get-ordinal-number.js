function getOrdinalNumber(num) {
  
   if(num%100===11 || num%100===12 || num%100===13){
  return num + "th";
 }
   if(num%10===1){
  return num + "st";
 }

   if(num%10===2){
  return num +"nd";
 }

  if(num%10===3){
  return num +"rd";
 }
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(23));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(111));
