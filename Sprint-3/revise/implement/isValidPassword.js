const isValidPassword=(password, passwords)=>{
    if (typeof password !== 'string' || password.length < 5) {
      return false; 
    }
  
    const hasUpperCase = /[A-Z]/.test(password); 
    const hasLowerCase = /[a-z]/.test(password); 
    const hasNumber = /[0-9]/.test(password);    
    const hasSymbol = /[!#$%.*&]/.test(password); // Check for non-alphanumeric symbols
    const isUnique = !passwords.includes(password); // Check if it's not in the previous passwords
  
    return hasUpperCase && hasLowerCase && hasNumber && hasSymbol && isUnique;
  }
  module.exports=isValidPassword