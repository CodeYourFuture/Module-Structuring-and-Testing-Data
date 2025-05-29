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
// pseudocode:  get the string from the start up to, but not including, the last "/"
const dir = filePath.slice(0, lastSlashIndex);
console.log(`The dir part of ${filePath} is ${dir}`);

// Create a variable to store the ext part of the variable
// pseudocode: get the index of the last "." then get the string from that index to the end of the string (since we know the filename has a "." extension)
const ext = base.lastIndexOf(".");
console.log(`The ext part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn
