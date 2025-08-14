function getOrdinalNumber(num) {
    const lastNumber = num % 10; 
    const secondLastNumber = num % 100;

    if(secondLastNumber === 11 || secondLastNumber === 12 || secondLastNumber === 13) {
 
        return num + "th";
    }   
    return num + "th"; // this will return all the other number + th
}
module.exports = getOrdinalNumber;