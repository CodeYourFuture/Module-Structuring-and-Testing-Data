function getOrdinalNumber(num) {
    if (isNaN(num)) {
      return NaN;
    }
if(num>=11 && num<=13){
    return num+"th"
}

if(num===1){
    return num+"st"
}
if (num === 2) {
  return num + "nd";
}
if (num === 3) {
  return num + "rd";
}
return (num)+"th"
}

module.exports = getOrdinalNumber;