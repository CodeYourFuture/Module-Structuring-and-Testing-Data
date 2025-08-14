function repeat(str, num) {
    if ( num < 0){
        throw new Error("Negative counts are not valid.");
    } else if (num == 0 ) {
        return '';
    } else {
        return str.repeat(num);
    }
}

module.exports = repeat;