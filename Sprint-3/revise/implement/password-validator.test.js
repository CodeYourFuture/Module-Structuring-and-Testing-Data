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
const previousPasswords = ["Hello1@", "Samira2$", "Peter4*"]
function isValidPassword(password){
    
    if(!password.length >=5){
        return false;
    }
    var upperCaseLetters = /[A-Z]/g;
    if(!password.match(upperCaseLetters)){
        return false;
    }
    var lowerCaseLetters = /[a-z]/g;
    if(!password.match(lowerCaseLetters)){
        return false;
    }
    if(!password.match(/[0-9]/g)){
        return false;
    }
    if(!password.match(/[@.#$!%^&*.?]/g)){
        return false;
    }

    if(previousPasswords.includes(password)){
        return false
    }
    return true;
}


describe("isValidPassword", () =>{
    test('does not Have at least 5 characters.', () => {
        expect(isValidPassword("lo5%")).toBe(false)
    })

    test('does not Have at least one English uppercase letter (A-Z)', () => {
        expect(isValidPassword("hello5%")).toBe(false)
    })

    test('does not Have at least one English lowercase letter (a-z)', () => {
        expect(isValidPassword("HELLO5%")).toBe(false)
    })

    test('does not Have at least one number', () => {
        expect(isValidPassword("HELLO%")).toBe(false)
    })

    test('does not Have non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")', () => {
        expect(isValidPassword("Hello5")).toBe(false)
    })

    test.each(previousPasswords)('Must not be any previous password in the passwords array. ', (input) => {
       console.log(input)
        expect(isValidPassword(input.toUpperCase())).toBe(false)
    })

    test.each(["Heloothere5$", "Name7&", "Helloworld1."])('Must not be any previous password in the passwords array. ', (input) => {
        console.log(input)
         expect(isValidPassword(input)).toBe(true)
     })
     
})


