// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const lastSlashIndex = filePath.lastIndexOf("/");
const lastDotIndex = filePath.lastIndexOf(".");

const base = filePath.slice(lastSlashIndex + 1);   // file.txt
const dir = filePath.slice(0, lastSlashIndex);     // /Users/mitch/cyf/Module-JS1/week-1/interpret
const ext = filePath.slice(lastDotIndex);          // .txt

console.log(`Base part of path: ${base}`);
console.log(`Dir part of path: ${dir}`);
console.log(`Ext part of path: ${ext}`);