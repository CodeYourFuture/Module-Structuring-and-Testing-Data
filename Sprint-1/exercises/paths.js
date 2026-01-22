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

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const lastDot = filePath.lastIndexOf(".");
console.log(`The indexDot is ${lastDot}`);

const ext = filePath.slice(lastDot);

const fileName = filePath.slice(lastSlashIndex + 1, lastDot);
const dir = filePath.slice(1, lastSlashIndex + 1);



console.log(`The dir is 👉 ${dir}`);
console.log(`The nameFile is 👉 ${fileName}`);
console.log(`The extension is 👉 ${ext}`);



