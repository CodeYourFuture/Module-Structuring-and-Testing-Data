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
// +1 to not include the slash in the base
// lastSlashIndex finds position of the last / in the string
// slice extracts part of the string from that position to the end
const dir = filePath.slice(0, lastSlashIndex);

const dotIndex = base.lastIndexOf(".");
const ext = base.slice(dotIndex);
// dotIndex finds position of the last . in the base string and slice extracts after this
console.log(`The base part of the file path is ${base}, the dir part is ${dir}, and the ext part is ${ext}`);
