let passwords = [];

function passwordValidator(input) {

    // have to go learn about regex or validation methods for this exercise
    //Cant use this: /[a-z]{1,}[A-Z]{1,}[0-9]{1,}[!#$%.*&]{1,}/
    //The above is for a password that goes in that specific order

    //const regexPattern = /[a-z]{1,}[A-Z]{1,}[0-9]{1,}[!#$%.*&]{1,}/;
    //write a regex for each condition
    const lowercaseRegex = /^(?=.*[a-z])/;
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const numberRegex = /^(?=.*[0-9])/;
    const specialCharacterRegex = /^(?=.*[!#$%.*&])/;

    //test each regex condition
    let lowercaseTest = lowercaseRegex.test(input);
    let uppercaseTest = uppercaseRegex.test(input);
    let numberTest = numberRegex.test(input);
    let specialCharacterTest = specialCharacterRegex.test(input);

    //make sure input is 5 or more characters long and not saved before in the passwords array
    if (input.length >= 5 && !passwords.includes(input)) {

        if (lowercaseTest && uppercaseTest && numberTest && specialCharacterTest) {
            passwords.push(input);
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return false;
    }

}

console.log(passwordValidator("Serna#2003"));
console.log(passwordValidator("Serna"));
console.log(passwordValidator("RowleyPo"));

module.exports = passwordValidator;