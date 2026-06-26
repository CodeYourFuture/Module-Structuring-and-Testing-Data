function getOrdinalNumber(num) {
  
   if(num===11){
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







//for committing//