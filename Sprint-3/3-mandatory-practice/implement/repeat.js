function repeat(strToRepeat,howMuchRep) {
    if(howMuchRep>=0) return strToRepeat.repeat(howMuchRep);
    else return "Negative Counts are not valid";
   
}

module.exports = repeat;