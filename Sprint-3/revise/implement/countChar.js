const countChar=(str, char)=>{
    if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
      throw new Error('Invalid input. The first argument must be a string, and the second must be a single character.');
    }
  
    let count = 0;
    for (let h = 0; h < str.length; h++) {
      if (str[h] === char) {
        count++;
      }
    }
  
    return count;
  }

  module.exports=countChar