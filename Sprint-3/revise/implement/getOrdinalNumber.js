const getOrdinalNumber=(num)=>{
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Invalid input');
    }
  
    const absNum = Math.abs(Math.floor(num));
    const lastDigit = absNum % 10;
    const lastTwoDigits = absNum % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${Math.floor(num)}th`;
    }
  
    switch (lastDigit) {
      case 1:
        return `${Math.floor(num)}st`;
      case 2:
        return `${Math.floor(num)}nd`;
      case 3:
        return `${Math.floor(num)}rd`;
      default:
        return `${Math.floor(num)}th`;
    }
  }
  
  module.exports=getOrdinalNumber
  