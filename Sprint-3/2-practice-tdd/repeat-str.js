function repeatStr(str, count) {
  if( count >= 0 )
  {return str.repeat (count)};
else { return 'invalid count'};
};

module.exports = repeatStr;