function getOrdinalNumber(num) {
   const suffix = ["th", "st", "nd", "rd"]; // suffix option of num 
   const value = num % 100; // check the remainder of the number which is the last 2 digit. 

   if (value > 11 && value < 13) {
    // this handle numbers like 11-19
    return num + 'th';
    
   }

 return  num + (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);
 // this handle other numbers 
}

module.exports = getOrdinalNumber;