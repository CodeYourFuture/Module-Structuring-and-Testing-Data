function repeatStr(str, count) {
  if (count < 0){
    throw new Error("invalid count");
  }

  let result="";

  for(let i=1 ; i <= count ; i++){
    result= str + result;
  }
  
  return result;
}

module.exports = repeatStr;
