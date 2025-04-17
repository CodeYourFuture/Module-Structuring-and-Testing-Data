function getOrdinalNumber(num) {
    if ( num%10 == 1){
        return num + 'st';
    } else if ( num%10 == 2 ){
        return num + 'nd';
    } else if ( num%10 == 3 ){
        return num + 'rd';
    } else if ( num%10 > 3 || num%10 == 0){
        return num + 'th';
    }
 
}
module.exports = getOrdinalNumber;