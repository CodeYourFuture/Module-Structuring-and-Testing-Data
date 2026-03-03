function repeatStr(str, count) {
  try{
    if(count === 0)
      return "";
    else if(count === 1)
      return str;
    else if(count < 0)
      throw new Error("an error is thrown");
    else
    return str.repeat(count);
  }
  catch(e){
    return e.message;
  }
}

module.exports = repeatStr;