function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here

    //This conditions are exactly the same as the ones in the key-implement file
    else if(numerator< Math.abs(denominator) && denominator<0) return true;
    
    else if (numerator >= denominator) return false;
    
    else if(numerator < 0 && Math.abs(numerator) < denominator) return true;
}

// module.exports = isProperFraction;
//I wasn't sure if I had to get the file from the key-implement folder, so I just copied the function here, in the case review I receive from a mentor says that it should be only this file that is exported to to the identical test file, I will change it, and uncomment the line above.
