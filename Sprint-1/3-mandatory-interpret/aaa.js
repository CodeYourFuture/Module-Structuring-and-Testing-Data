for (let a = 1; a <= 9; a++) {
  for (let b = 0; b <= 9; b++) {
    for (let c = 1; c <= 9; c++) {
      for (let d = 0; d <= 9; d++) {
        let left = Math.pow(a, b) * Math.pow(c, d);
        let right = parseInt(`${a}${b}${c}${d}`);

        if (left === right) {
          console.log(`Match found: (${a}^${b}) * (${c}^${d}) = ${left}`);
        }
      }
    }
  }
}