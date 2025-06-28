let bannedPassword = [];
function passwordValidator(password) {
    //return password.length < 5 ? false : true
   // let bannedPassword = ["Password123","Mill3*","M56!h"];
    if (password.length < 5) return false;

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) return false;
  
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) return false;
  
    // Check for at least one number
    if (!/[0-9]/.test(password)) return false;
    //checks for at least the password have one of these special characters.
    
    const specialCharacters = ["!", "#", "$", "%", ".", "*", "&"];
    if (!specialCharacters.some(char => password.includes(char))) return false;
    // Check if the password was used before
   

    if (bannedPassword.includes(password)) return false;

    bannedPassword.push(password);


    return true;
  }
   



module.exports = passwordValidator;