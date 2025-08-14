function getOrdinalNumber(num) {
 if (num === 11 || num === 12 || num === 13) return num + "th";
 else if (num % 10 == 1) return num + "st";
 else if (num % 10 == 2) return num + "nd";
 else if (num % 10 == 3) return num + "rd";
 else return num + "th";
}

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(13));
console.log(getOrdinalNumber(21));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(23));
console.log(getOrdinalNumber(26));
console.log(getOrdinalNumber(31));
