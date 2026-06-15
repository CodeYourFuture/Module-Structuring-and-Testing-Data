

function capitalise(str) {
  let str = '${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

It said syntaxError because identifier 'str' has already been declared 
because we should use backtick`` to wrap the template literal.The first one of the bracket is a
single quote, not a backtick.

  Also, since str has already been declared as a parameter, we should not use it to define as variable.





function capitalise(str) {

  let result = `${str[0].toUpperCase() + str.slice(1)}`;
  return result;
}

console.log(capitalise("str"));

