function checkPassword(password) {
    if (password.length < 5) {
      return false;
    }
  
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    if (!/\d/.test(password)) {
      return false;
    }
  
    if (!/[!#$%.*&]/.test(password)) {
      return false;
    }
  
    return true;
  }
   module.exports = checkPassword;