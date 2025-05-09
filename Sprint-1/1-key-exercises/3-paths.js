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
// // adding console.log to check what this code does
// console.log("lastSlashIndex:", lastSlashIndex);
const base = filePath.slice(lastSlashIndex + 1);
// adding console.log to check what this code does
// console.log("base:", base);
// console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

//After finding out the lastIndexof "/" was 44, it was easier to add the position on slice.
const dir = `Dir : ${filePath.slice(0, 44)}`;
const ext = `Ext : ${base.slice(4)}`;
console.log(dir);
console.log(ext);
// https://www.google.com/search?q=slice+mdn
