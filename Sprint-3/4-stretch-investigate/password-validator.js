
   
    function passwordValidator(password,previousPasswords=[]) {
        if (previousPasswords.includes(password)) return false;
        const hasMinLength = password.length >= 5;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!#$%.*&]/.test(password);
      
        return hasMinLength && hasUpper && hasLower && hasNumber && hasSymbol;
      }
      
      module.exports = passwordValidator;
      