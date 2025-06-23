function getOrdinalNumber(num) {
    let sufix = 'th';
 if (num === 11 || num === 12 || num === 13){ 
    sufix = 'th';
    return num + sufix;
 } else {
 if (num.toString().slice(-1) === '1') sufix = 'st';
 if (num.toString().slice(-1) === '2') sufix = 'nd';
 if (num.toString().slice(-1) === '3') sufix = 'rd';
 return num + sufix;
}
}   

module.exports = getOrdinalNumber;