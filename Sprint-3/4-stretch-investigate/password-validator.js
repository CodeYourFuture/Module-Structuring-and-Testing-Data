function passwordValidator(password, previousPasswords =[]) {
  //password has at least 5 characters
  if (password.length < 5) {return false;}
    //password has at least one English uppercase letter (a-z)
  if (!containUpperCase(password)) {return false;}
      //password has at least one English lowercase letter (a-z)
  if (!containLowerCase(password)) {return false;}
        //password has at least one of the following non-alphanumeric symbols: (!, #, $, %, ., *, &)
  if (!containSymbols(password)) {return false;}
          //password Must not be any previous password in the passwords array
  if (!checkPreviousPass(password, previousPasswords)) {return false; }
  return true;
  
}

function containUpperCase(str) {
  return /[A-Z]/.test(str);
}

function containLowerCase(str) {
  return /[a-z]/.test(str);
}

function containSymbols(str) {
  return /[!#$%.*&]/.test(str);
}
function checkPreviousPass(str, previousPasswords) {
    return !previousPasswords.includes(str);
}

module.exports = passwordValidator;
