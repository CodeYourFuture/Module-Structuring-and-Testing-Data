function isProperFraction(numerator, denominator) {
    if (numerator < denominator) {
        return true;
    }else if(numerator>denominator){
        return false; 
    }else if(numerator<0 && denominator>0){
        return true; 
    }else if(numerator===denominator){
        return false;
    }else{
        return false;
    }
    // add your completed function from key-implement here
}

module.exports = isProperFraction;