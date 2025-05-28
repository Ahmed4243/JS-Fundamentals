const { argv } = require("node:process");
const userArgs = argv.slice(2);
console.log(userArgs[0] + " is " + userArgs[1]);