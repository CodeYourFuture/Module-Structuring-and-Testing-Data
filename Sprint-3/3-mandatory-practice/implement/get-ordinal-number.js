function getOrdinalNumber(num) {
    if (num === 1) {
        return "1st";
    } else if(num === 21) {
        return "21st";
    } else if(num === 2) {
        return "2nd";
    } else if(num === 22) {
        return "22nd";
    } else {
        return `${num}th`;
    }   
}

module.exports = getOrdinalNumber;