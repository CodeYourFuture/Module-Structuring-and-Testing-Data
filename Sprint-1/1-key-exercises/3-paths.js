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
const dir = filePath.slice(lastSlashIndex - 9, lastSlashIndex);//dir variable gets to "dir part of
//  the path by using last instance of "/" as a reference and counting backwards 9 digits to get the beginning of the path
// and uses last instance of "/" as the end of the path, which is "interpret"
const ext = filePath.slice(lastSlashIndex + 5);// ext variable gets the last instance of "/" as a reference and
//  counts 5 indexes forward to get the "ext" part of the path which is ".txt"
console.log(`The dir part of the filePath ${filePath} variable is "${dir}".`);
console.log(`The ext part of the filePath ${filePath} variable is "${ext}".`);

// https://www.google.com/search?q=slice+mdn