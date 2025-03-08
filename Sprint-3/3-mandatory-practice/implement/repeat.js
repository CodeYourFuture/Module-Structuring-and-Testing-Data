function repeat(str, count) {
    if (count <= 0) { 
      return "";
    }
  
    let result = "";
    for (let i = 0; i < count; i++) {
      result += str;
    }
    return result;
  }
  
  module.exports = repeat;