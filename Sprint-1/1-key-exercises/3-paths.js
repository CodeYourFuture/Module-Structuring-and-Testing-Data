/// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// Find last slash to separate dir and base
const lastSlashIndex = filePath.lastIndexOf("/");

// base = name + ext (e.g. "file.txt")
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// dir = everything before the last slash
const dir = filePath.slice(0, lastSlashIndex);

// Find last dot to extract only extension
const lastDotIndex = filePath.lastIndexOf(".");

// ext = everything from the last dot onward
const ext = filePath.slice(lastDotIndex);

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn


