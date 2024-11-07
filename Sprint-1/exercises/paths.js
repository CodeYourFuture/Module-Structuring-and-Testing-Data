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

_________________________________**Solution**_________________________________________________

/* To get the dir and ext parts of filePath, we can use the following approach:

dir: This is the path up to the last /, so we can use .slice() to extract everything before lastSlashIndex.
ext: This is the file extension, which starts after the last . in the base part of the file path. */

// dir part = everything before the last slash("/")
const dir = filePath.slice(0, lastSlashIndex);

// To get ext: we must first finds the last . in the base (file name) and slices from that point onward, giving us the extension (.txt).
const lastDotIndex = base.lastIndexOf(".");

// The lastDotIndex will allow us to slice from that point.
const ext = base.slice(lastDotIndex);