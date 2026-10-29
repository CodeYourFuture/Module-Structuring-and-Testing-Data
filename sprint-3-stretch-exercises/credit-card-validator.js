export function creditCardValidator(numbers) {
  if (numbers.length !== 16 || !Number.isInteger(Number(numbers))) {
    return false;
  }
  if (numbers.slice(-1) % 2 !== 0) {
    return false;
  }

  let different = false;
  let total = 0;

  for (const number of numbers) {
    total += Number(number);

    if (number !== numbers[0]) {
      different = true;
    }
  }
  if (!different || total <= 16) {
    return false;
  }
  return true;
}
