function isValidPassword(password, passwords) {
  if (password.length < 5) {
    return false;
  }

  return true;
}

console.log(isValidPassword("abc", []));
console.log(isValidPassword("abcde", []));

module.exports = isValidPassword;
