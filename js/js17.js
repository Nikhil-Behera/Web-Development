const fs = require("fs");
const file_content = fs.readFileSync("js16.js","utf-8"); //returns the content of the file present in the desired path.
console.log(file_content);

console.log("Creating a new file and writing onto it...");
fs.writeFileSync("new.txt","This is a file created by the writefilesync function present in the fs module");