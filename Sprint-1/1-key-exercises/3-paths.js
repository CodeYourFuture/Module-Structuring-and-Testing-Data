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

// Create a variable to store the name part of the variable
// Use the lastIndexOf method to find the last slash in the filePath variable
// Use the slice method to extract the base part of the filePath variable
const dir = filePath.slice(0, lastSlashIndex);
const name = base.slice(0, base.lastIndexOf("."));
const ext = base.slice(base.lastIndexOf(".") + 1);

// https://www.google.com/search?q=slice+mdn

console.log(`name: ${name}`);
console.log(`ext: ${ext}`);
console.log(`dir: ${dir}`);