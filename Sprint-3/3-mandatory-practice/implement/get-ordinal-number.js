function getOrdinalNumber(num) {
  const lastDigits = num % 10
  const lastTwoDigits = num % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13){
    return `${num}th`;
  }
  if (lastDigits === 1) return `${num}st`;
   if (lastDigits === 2) return `${num}nd`;
   if (lastDigits === 3) return `${num}rd`;
   return `${num}th`
  }



module.exports = getOrdinalNumber;