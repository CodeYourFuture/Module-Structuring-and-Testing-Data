function passwordValidator(password, passwords){

    if(password.length < 5){
        return false;
     }

     if(passwords.includes(password)){
        return false;
     }else {
        passwords.push(password);
        console.log("Password added successfully!")
        console.log("Updated passwords array:", passwords)
     }

     const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!#@$%&*.]).+$/;

     if(regex.test(password)){
        return true;
     }else{
        return false;
     }
}

module.exports = passwordValidator;

let  passwords = ["Si@#M3.pro!*z4"];

console.log(passwordValidator("Bad@11.#You%", passwords));
