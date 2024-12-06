const validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%.*&]).{5,}$/

const isValidPass = (password) => {
  if(validPass.test(password)) {
    return true;
  }
  else {
    return false;
  }
}

// isValidPass('alAhh35#');
module.exports = isValidPass;