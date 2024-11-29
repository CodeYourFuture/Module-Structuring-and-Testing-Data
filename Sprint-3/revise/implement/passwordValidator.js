function passwordValidator(password, passwords){

    if(password.length < 5){
        return false;
     }

     if(passwords.includes(password)){
        return "Password is already used"
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

<<<<<<< HEAD
module.exports = passwordValidator;
=======
module.exports = pass
>>>>>>> 8b1b59c (Created a password validator function and got to work properly)

let  passwords = ["Si@#M3.pro!*z4"];

console.log(passwordValidator("Bad@11.#You%", passwords));
