function getOrdinalNumber(num) {
    let exception  = num %100
    if (exception >=11 && exception<=13){
        return num+'th'
    }
    else if (num %10 == 1){
        return num+"st"
    } 
    else if (num %10 == 2){
        return num+"nd"
    }
    else if (num %10 == 3){
        return num+"rd"
    }
    else return num+"th"
}

module.exports = getOrdinalNumber;