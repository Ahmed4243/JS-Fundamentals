const { argv } = require("node:process");
const userArg = argv.slice(2);

if (userArg[0] !== undefined && !isNaN(Number(userArg[0]))) {
    for (let i = 0; i < Number(userArg[0]); i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}