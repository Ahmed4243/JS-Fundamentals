const { argv } = require("node:process");
const userArgs = argv.slice(2);

const a = Number(userArgs[0]);

if (!isNaN(a)) {
    for (let i = 0; i < a; i++) {
        console.log("x".repeat(a));
    }
}