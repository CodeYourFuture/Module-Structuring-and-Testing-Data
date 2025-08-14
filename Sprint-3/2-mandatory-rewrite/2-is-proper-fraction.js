function isProperFraction(numerator, denominator) {
    if (numerator < denominator) 
        {
          return true;
        }
       else if (numerator<0 && denominator<0)
          {
            return true;
          } 
       else 
       {
          return false;
       }
  
  }

module.exports = isProperFraction;