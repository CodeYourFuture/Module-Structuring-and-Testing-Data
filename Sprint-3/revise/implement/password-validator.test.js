

/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const oldsPasswords = ["Alds.33","Hdsd@88"]
 function isValidPassword(password, oldsPasswords){
    if(password.length < 5){
        return false
    }
    const hasUpperCase = /[A-Z]/.test(password);
    if(!hasUpperCase){
        return false
    }
    const hasLowerCase = /[a-z]/.test(password);
    if(!hasLowerCase){
        return false
    }
    const hasNumber = /[0-9]/.test(password);
    if(!hasNumber){
        return false
    }
    const hasSpecialSymbol = /[!#$%.*&]/.test(password);
    if(!hasSpecialSymbol){
        return false
    }
    if(oldsPasswords.includes(password)){
        return false
    }
    return true
 }

test("Write a function that should check if a password is validand returns a boolean",() => {
    expect(isValidPassword("Hdsd.98","oldsPasswords")).toBe(true);
    expect(isValidPassword("Hdsd@88","oldsPasswords")).toBe(false);
})