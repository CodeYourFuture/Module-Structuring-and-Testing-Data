// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

// The dir part is everything before the base part
// The ext part is everything after the last "." in the base part

// You can use the .lastIndexOf() method of strings to find the position of the last occurrence of a specific character in a string.
// For the dir part, you need to find the position of the last "/" in the filePath string.
// For the ext part, you need to find the position of the last "." in the base string.

const dir = filePath.slice(0, lastSlashIndex + 1);  // this will include the last "/"
// if you don't want the last "/", use lastSlashIndex instead of lastSlashIndex + 1

const ext = base.slice(base.lastIndexOf("."));  // this will include the "."
// if you don't want the ".", use filePath.lastIndexOf(".") + 1 instead of filePath.lastIndexOf(".")

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn