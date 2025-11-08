function repeat(str,count) {
  if (count=== 0){
    return ""
  }
  if(count<0){
    return "invalid"
  }
  return str.repeat(count);
}

module.exports = repeat;
