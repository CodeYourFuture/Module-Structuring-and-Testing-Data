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
function passwordValidator(password){
    const passwords = ["!Admin123", "Hell06*", "My&passw0rd"];  // An array of previous password for checks
    const hasMinLength = password.length >= 5;                 // Check the length of the password is at least 5
    const hasUppercase = /[A-Z]/.test(password);   // Check inside of the password as a string with test there is a Uppercase letter
    const hasLowercase = /[a-z]/.test(password);  // Check inside of the password as a string with test there is a Lowercase letter
    const hasNumber = /[0-9]/.test(password);  // Check inside of the password as a string with test there is a number
    const hasSymbol = /[!#$%.&*]/.test(password); // Check inside of the password as a string with test there is a symbol
    const isUnique = !passwords.includes(password); // Check inside of the password as a string with test there is not previous pass

    //check all of the test with && and if all of them be true then the total result is true > it means password is valid
        
    return (hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSymbol && isUnique);    
    
    //If just one of the comparation be false it will return false > it means password is invalid
    // else return false;
}

console.log(passwordValidator("Hell06*")); //false
console.log(passwordValidator("Hell07&")); //true
console.log(passwordValidator("aDmin06*")); //true

////////////////////>>>>>>>>>>>>>>>>> test with jest syntax <<<<<<<<<<<<<<<<<<<<///////////////

describe("Password Validator",() => {
    test("Show valid Password", () => {
        expect(passwordValidator("Hell07&")).toBe(true);
        expect(passwordValidator("aDmin06*")).toBe(true);
        expect(passwordValidator("New*Pass1")).toBe(true)
    });
    test("Show invalid Password", () => {
        expect(passwordValidator("aDmin0")).toBe(false);
        expect(passwordValidator("1ap&b")).toBe(false);
        expect(passwordValidator("123pR")).toBe(false);
    })
});
