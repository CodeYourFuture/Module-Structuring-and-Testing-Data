function passwordValidator(password) {
  //console.log(password !== password.toUpperCase());
  let password2=password.split("")
  console.log(password2);
  let newPassword=[];
  // if (
  //   password.length >= 5 &&
  //   password !== password.toLowerCase() &&
  //   password !== password.toUpperCase() 
    
  // ) {
  //   return true;
  // }
  for(element of password2){
    if (
      password2.length >= 5 &&
      /[A-Za-z]/.test(password2) 
      
    ) {
      return true;
    }
  }

  return false;
}


console.log(passwordValidator("434398866"));

module.exports = passwordValidator;
