console.log("This is the file which is importing maths module.");

const mod = require("./module.js");

console.log(mod.add([5,6,7,8]));
console.log(mod.sub([5,6,7,8]));
console.log(mod.multiply([5,6,7,8]));
console.log(mod.divide(60,3));
console.log(mod.modulus(10,7));