function passwordValidator(password) {
    // return password.length < 5 ? false : true 
   
   return (password.length < 5 &&
        /[A-Za-z]/.test(password)&&
        /[! # $ % .* &]/.test(password)&&
        /[0-9]/.test(password)&&
        !previousPasswords.includes(password) 
   );
}


module.exports = passwordValidator;