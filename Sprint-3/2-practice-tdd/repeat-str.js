function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let strOutput = "";
  if (count >= 0){
    for (let i=0 ; i<count ; i++){
      strOutput = strOutput + str; 
    }
    return strOutput;
  }else{
    throw new Error("Negative count is not valid");
  }
}

module.exports = repeatStr;
