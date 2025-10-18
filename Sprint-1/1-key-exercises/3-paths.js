// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// Find the index of the last slash and the last dot
const lastSlashIndex = filePath.lastIndexOf("/");
const lastDotIndex = filePath.lastIndexOf(".");

// Extract each part
const base = filePath.slice(lastSlashIndex + 1); // "file.txt"
const dir = filePath.slice(0, lastSlashIndex);   // "/Users/mitch/cyf/Module-JS1/week-1/interpret"
const ext = filePath.slice(lastDotIndex + 1);    // "txt"

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The base part of ${filePath} is ${base}`);
console.log(`The ext part of ${filePath} is ${ext}`);
