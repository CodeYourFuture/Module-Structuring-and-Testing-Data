/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function isValidLength(password) {
    if (password.length >= 5){
        return true 
    } else if (password.length < 5) 
      return false;
}
function containsUpperCase(password) {
    for(let i = 0 ; i < password.length; i++){
      //console.log(password[i]);
      if (password[i] === password[i].toUpperCase())
         return true
    }return false;
}

function containsLowerCase(password) {
    for(let i = 0 ; i < password.length; i++){
      if (password[i] === password[i].toLowerCase())
         return true
    }return false;
}

function hasOneAlphaNumericChar(password){
  for(let i = 0 ; i < password.length; i++){
    const alphaNumerics = ["!", "#", "$", "%", ".", "*", "&"]
      if (alphaNumerics.includes(password[i]))
         return true
    }return false;
}

function hasOneNumber(password){
  for(let i = 0 ; i < password.length; i++){
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
      if (digits.includes(password[i]))
         return true
    }return false;
}

function notPreviousPassword(password){
    let previousPassword = ["Hamster2", "Dog!",]
      if (previousPassword.includes(password)){
         return false
    } return true;
  }

  function isValidPassword(password){
    if (!isValidLength(password)){
      return false
    }

     if (!containsUpperCase(password)){
      return false
    }

     if (!containsLowerCase(password)){
      return false
    }

     if (!hasOneAlphaNumericChar(password)){
      return false
    }

     if (!hasOneNumber(password)){
      return false
    }

     if (!notPreviousPassword(password)){
      return false
    }
    return true;
  }



//console.log(isValidLength("cat"));
//console.log(containsUpperCase("cAt"));
//console.log(containsUpperCase("cAt"));      
//console.log(hasOneNumber("cAt"));  
//console.log(hasOneAlphaNumericChar("cat!"))
//console.log(notPreviousPassword("Dog!"))
console.log(isValidPassword("!Ca5"));


test('if password is a valid password.', () => {
  expect(isValidPassword("abcd")).toBe(false);     
  expect(isValidPassword("Abc!")).toBe(false);    
  expect(isValidPassword("ABCD1")).toBe(false);    
  expect(isValidPassword("Dog!")).toBe(false);
})