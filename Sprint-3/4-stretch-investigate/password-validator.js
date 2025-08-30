function passwordValidator(password) {
    const passwords = ["Test&1", "P@ssw0rd!", "$ample5"];
    let upperCase = false;
    let lowerCase = false;
    let numberChar = false;
    const specialChar = "!£%$&*?#";
    let special = false;

    if (password.length < 5) return false;

    

    for (let char of password){
        if (char >= "A" && char <="Z") upperCase = true;
        else if (char >="a" && char <="z") lowerCase = true;
        else if (char >= "0" && char <= "9") numberChar = true;
        else if (specialChar.indexOf(char) !== -1) special = true;
    }

    if (!(upperCase && lowerCase && numberChar && special)) return false;

    if (passwords.indexOf(password) !== -1) return false;

    else return true;
}


module.exports = passwordValidator;