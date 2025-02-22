function getOrdinalNumber(num) {

    if (number < 1) return number; 

    let suffix = "th"; 
    if (number % 100 !== 11 && number % 100 !== 12 && number % 100 !== 13) {   //% 100 остаток от деления 
        if (number % 10 === 1) suffix = "st";
        else if (number % 10 === 2) suffix = "nd";
        else if (number % 10 === 3) suffix = "rd";
    }

    
 return number + suffix;
}

console.log(getOrdinalNumber(1));   // "1st"
console.log(getOrdinalNumber(2));   // "2nd"
console.log(getOrdinalNumber(3));   // "3rd"
console.log(getOrdinalNumber(4));   // "4th"
console.log(getOrdinalNumber(11));  // "11th"
console.log(getOrdinalNumber(22));  // "22nd"
console.log(getOrdinalNumber(103)); // "103rd"


module.exports = getOrdinalNumber;