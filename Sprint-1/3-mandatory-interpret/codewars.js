function transposeTwoStrings(array) {
  let a = "";
  let no = Math.max(array[0].length, array[1].length);
  for (let i = 0; i < no; i++) {
    if (i < array[0].length) {
      a += array[0][i];
    } else a += " ";
    a += " ";
    if (i < array[1].length) {
      a += array[1][i];
    } else a += " ";
    if (i < array[1].length - 1 || i < array[0].length - 1) a += "\n";
  }

  return a;
}
