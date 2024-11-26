// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)
console.log()
const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

console.log()


// Create a variable to store the dir part of the filePath variable
const dir=filePath.slice(lastSlashIndex-43,44)
console.log(`The dir part of ${filePath} is ${dir}`);

console.log()

// Create a variable to store the ext part of the variable
const ext=filePath.slice(lastSlashIndex +5)
console.log(`The ext part of ${filePath} is ${ext}`);
console.log()



