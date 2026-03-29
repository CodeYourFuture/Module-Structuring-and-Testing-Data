// - Input: any Number (finite or not). Non-finite values (NaN, Infinity) are stringified.
// - Behaviour: uses the ingteger part (Math.trunc) so descimals are truncated (e.g. 4.9 -> 4).
// - Negative numbers keep their sign (e.g. -3 -> '-3rd').
// - Special case: 11, 12, 13 always use 'th.
// - Output: a string like '1st', '2nd', '11th' 0r 'NaN'/'Infinity' for non-finite input.



function getOrdinalNumber(num) {
  if (!Number.isFinite(num)) return String(num);
  const sign = num < 0 ? '-' : '';
  const i = Math.trunc(Math.abs(num));
  const lastTwo = i % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return sign + i + 'th';
    
  
  switch (i % 10) {
    case 1: return sign + i + 'st;
    case 2: return sign + i + 'nd';
    case 3: return sign + i + 'rd';
    default: return sign + i + 'th';
  }
}

module.exports = getOrdinalNumber;
