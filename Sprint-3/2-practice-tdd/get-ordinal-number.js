function getOrdinalNumber(num) {
    num = num.toString();
    if (num.slice(-2) === '11' || num.slice(-2) === '12' || num.slice(-2) === '13') {
        return num + 'th';
    } else if (num.slice(-1) === '1') {
        return num + 'st';
    } else if (num.slice(-1) === '2') {
        return num + 'nd';
    } else if (num.slice(-1) === '3') {
        return num + 'rd';
    } else {
        return num + 'th';
    } 
}

module.exports = getOrdinalNumber;
console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(2));
console.log(getOrdinalNumber(3));
console.log(getOrdinalNumber(4));
console.log(getOrdinalNumber(11));
console.log(getOrdinalNumber(22));
console.log(getOrdinalNumber(33));
