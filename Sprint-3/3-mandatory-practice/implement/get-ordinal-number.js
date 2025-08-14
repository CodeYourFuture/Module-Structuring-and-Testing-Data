function getOrdinalNumber(num) {
    let lastDigit = (num.toString()).slice(-1);
    if(num > 10 && num < 14|| lastDigit >= 4)  {return num + "th"}
    else if  (lastDigit == 1) return num + "st"
    else if  (lastDigit == 2) return num + "nd"
    else if  (lastDigit == 3) return num + "rd"

}

module.exports = getOrdinalNumber;

// 1st 11th 21st 31st
// 2nd 12th 22nd 32nd
// 3rd 13th 23rd 33rd

