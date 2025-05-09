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
const indexOfDot = filePath.lastIndexOf("."); // Get last index of '.'
const base = filePath.slice(lastSlashIndex + 1);
const dir = filePath.slice(0, lastSlashIndex); // 1. Create a variable to store the dir part of the filePath variable
const ext = filePath.slice(indexOfDot); // 2. Create a variable to store the ext part of the variable

// Output
console.log(`1. Dir - "${dir}"`);
console.log(`2. Ext - "${ext}"`);
console.log(`3. The base part of "${filePath}" is "${base}"`);

// Resource - https://www.google.com/search?q=slice+mdn
