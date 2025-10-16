function repeat(str,count) {
  if(count<0){
    return "Error: negative numbers are not valid";
  }
  return (str.repeat(count));
}

module.exports = repeat;



