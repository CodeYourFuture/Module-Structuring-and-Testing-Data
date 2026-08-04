function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let result="";
  if (count >=1){
    for(let i=1 ; i <= count ; i++){
    result= str + result;
  }
  return result;
  }
  else if (count == 0){
    return "";
  }
  throw new Error("invalid count")
}

module.exports = repeatStr;
