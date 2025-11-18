function repeatStr(str, count) {

  if ( arguments.length !== 2) {
    throw new Error(`Function requires exactly two arguments: a string and a count. Received ${arguments.length} arguments`);
    
  }

  if (typeof str !== "string") {
    throw new Error("First argument must be a string. Received type " + typeof str);
  }

  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Second argument must be a non-negative integer. Received " + count  );
  }
  
  return str.repeat(count);
}

module.exports = repeatStr;
