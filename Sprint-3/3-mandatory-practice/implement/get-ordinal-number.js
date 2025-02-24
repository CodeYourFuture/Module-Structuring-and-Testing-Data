
function getOrdinalNumber(num) {
    const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
      };
   
}

console.log('num ->', getOrdinalNumber(59));  // "1st
module.exports = getOrdinalNumber;