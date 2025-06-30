function repeat(str, count) {
  if (count < 0){
    throw new Error("throw an error as negative counts are not valid");
   }
    return str.repeat(count);
}


module.exports = repeat;
