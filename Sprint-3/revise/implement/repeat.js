const repeat=(str, count)=>{
    if (typeof str !== 'string') 
      throw new Error('Input must be a string');
    if (!Number.isInteger(count) || count < 0) 
      throw new Error('Count must be a non-negative integer');
    if (count === 0) 
      return ''; 
    if (count === 1) 
      return str; 
    return str.repeat(count); 
  }
  module.exports=repeat;
  