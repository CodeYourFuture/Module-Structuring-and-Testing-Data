function capitalise(str) {
  let string = `${str[0].toUpperCase()}${str.slice(1)}`;
  return string;
}

console.log("test", capitalise("abc"))

