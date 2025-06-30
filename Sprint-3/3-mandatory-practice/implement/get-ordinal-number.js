function getOrdinalNumber(num) {
    const strNum= num.toString();
    if(strNum.slice(-2)==="11") {
        return strNum + "th";
    }
if(strNum.slice(-2)==="12") {
        return strNum + "th";
    }   
if(strNum.slice(-2)==="13") {
        return strNum + "th";
    }
if(strNum.slice(-1)==="1") {
        return strNum + "st";
    }
if(strNum.slice(-1)==="2") {
        return strNum + "nd";
    }
if(strNum.slice(-1)==="3") {
        return strNum + "rd";
    }
    
}


module.exports = getOrdinalNumber;
