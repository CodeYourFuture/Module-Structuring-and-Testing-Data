function getOrdinalNumber(num) {
    //num ending 11, 12, 13 should return th
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    const lastDigit = num % 10;// it check the correct ordinal suffix for all other number

    if (lastDigit===1){
        return num + "st";
    }
    else if (lastDigit===2){
        return num + "nd";
    }else if( lastDigit===3){
        return  num +"rd";
    }
    else{
        return num +"th";
    }
}

module.exports = getOrdinalNumber;