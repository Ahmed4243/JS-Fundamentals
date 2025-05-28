const { argv } = require("node:process");
const userArgs = argv.slice(2);
if (userArgs[0] !== undefined && !isNaN(Number(userArgs[0]))) {
    console.log("My number: " + userArgs[0])
} else {
    console.log("Not a number")
}