function repeatStr(times, str) {
  if (times < 0){ throw ("error input required to repeat")}
  return str.repeat(times);

} 


module.exports = repeatStr;
