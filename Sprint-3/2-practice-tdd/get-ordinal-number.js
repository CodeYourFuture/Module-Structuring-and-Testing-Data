//function getOrdinalNumber(num) {
//  return "1st";
//}

//module.exports = getOrdinalNumber;

function getOrdinalNumber(n) {
  const suffix = (n % 10 === 1 && n % 100 !== 11) ? 'st' :
                 (n % 10 === 2 && n % 100 !== 12) ? 'nd' :
                 (n % 10 === 3 && n % 100 !== 13) ? 'rd' : 'th';
  return `${n}${suffix}`;
}

module.exports = getOrdinalNumber;
