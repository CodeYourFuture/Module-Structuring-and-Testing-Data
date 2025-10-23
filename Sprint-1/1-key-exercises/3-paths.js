// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘



// all spaces in the "" line should be ignored. THey are purely for formatting.

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log (the base part of ${filePath} is ${base});

// Create a variable to store the dir part of the filePath variable.
// Create a variable to store the ext part of the variable.

const dir = filePath.slice(lastSlashIndex+1)
const ext = filePath.slice(lastDotIndexOf(".") +1);   

console.log (dir)
// https://www.google.com/search?q=slice+mdn