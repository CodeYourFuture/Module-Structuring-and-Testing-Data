function getOrdinalNumber(num) {
    
        if (num === 1) {
            return "1st";
        } else if (num === 2) {
            return "2nd";
        } else if (num === 3) {
            return "3rd";
        } else if (num > 3 && num < 21) {
            return num + "th";
        } else if (num % 10 === 1) {
            return num + "st";
        } else if (num % 10 === 2) {
            return num + "nd";
        } else if (num % 10 === 3) {
            return num + "rd";
        } else {
            return num + "th";
        }

    }
 

module.exports = getOrdinalNumber;