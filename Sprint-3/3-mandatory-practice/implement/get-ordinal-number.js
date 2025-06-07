function getOrdinalNumber(num) {
let lastTwoDigit = num.toString().slice(-2)
if (["11","12","13"].includes(lastTwoDigit)){
    num = `${num}th`
}

 let lastDigit = num.toString().slice(-1)
 if (lastDigit === "1") {
    num = `${num}st`
 } else if (lastDigit === "2") {
    num = `${num}nd`
 }else if (lastDigit === "3") {
    num = `${num}rd`
 }else if ( ["4", "5", "6", "7", "8", "9", "0"].includes(lastDigit
    )) {
    num = `${num}th`
 }
 return num
}


console.log(getOrdinalNumber(11))
module.exports = getOrdinalNumber;