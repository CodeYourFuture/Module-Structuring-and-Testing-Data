function repeat(givenString, num) {
    if (Number.isInteger(num) && num >= 0) return givenString.repeat(num);
    else return "Please enter a valid count number";
}

module.exports = repeat;