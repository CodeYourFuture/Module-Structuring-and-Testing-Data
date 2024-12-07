function repeat(str, num) {

    let newStr = "";

    if (num === 0) {
        return '';
    }
    else if (num < 0) {
        throw new Error("Value of num has to be 1 or more!");
    }
    else if (num >= 1) {
        for (let i = 0; i < num; i++) {
            newStr += str;
        }

        return newStr;
    }
}

// console.log(repeat("Serna", -9));

module.exports = repeat;