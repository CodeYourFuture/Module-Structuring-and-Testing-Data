function getOrdinalNumber(num) {
  num = num.toString();
  const lastTwo = num.slice(-2);
  const lastOne = num.slice(-1);

  if (['11', '12', '13'].includes(lastTwo)) {
    return num + 'th';
  }

  switch (lastOne) {
    case '1': return num + 'st';
    case '2': return num + 'nd';
    case '3': return num + 'rd';
    default:  return num + 'th';
  }
}

module.exports = getOrdinalNumber;

