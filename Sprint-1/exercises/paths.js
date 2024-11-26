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
console.log(`The base part of ${filePath} is : ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

//ANswer :

const dir = filePath.slice(0, lastSlashIndex);
console.log(`The directory part of ${filePath} is : ${dir}`);

const ext = base.slice(base.lastIndexOf(".") + 1);
console.log(`The extension part of ${filePath} is : ${ext}`);

// My Exercises

const fullName = "Sajad.Soornisofla/Male";
const lastDot = fullName.lastIndexOf(".");
const lastSlash = fullName.lastIndexOf("/");
const firstName = fullName.slice(0, lastDot);
const gender = fullName.slice(lastSlash + 1);
const sureName = fullName.slice(lastDot + 1, lastSlash);

console.log(firstName);
console.log(sureName);
console.log(gender);
