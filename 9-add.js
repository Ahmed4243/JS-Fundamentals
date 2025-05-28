const { argv } = require("node:process");
const userArgs = argv.slice(2);


const a = Number (userArgs[0]);
const b = Number (userArgs[1]);

if ( !isNaN(a) && !isNaN(b)) {
    let result = add(a, b)
    console.log(result)
} else {
    console.log(NaN);
}

function add(a, b) {
    return a + b;
}