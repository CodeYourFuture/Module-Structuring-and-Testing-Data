function passwordValidator(password, passwords){

    if(password.length < 5){
        return "Password invalid";
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
        return "Password valid";
     }else{
        return "Password invalid";
     }
}

module.exports = pass

let  passwords = ["Si@#M3.pro!*z4"];

console.log(passwordValidator("Bad@11.#You%", passwords));
