function repeat(strToRepeat, howMuchRep) {
    if (!Number.isInteger(howMuchRep)) {
        return "Float values are invalid";
    }
    if (howMuchRep < 0) {
        return "Negative Counts are not valid";
    }
    return strToRepeat.repeat(howMuchRep);
}

module.exports = repeat;



module.exports = repeat;
