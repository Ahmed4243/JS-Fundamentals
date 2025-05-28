const { argv } = require("node:process");
const userArgs = argv.slice(2);

const a = Number(userArgs[0]);

if (!isNaN(a)) {
    console.log(fact(a));
} else {
    console.log(1);
}

function fact(n) {
    if (n === 0||n === 1) {
        return 1;
    }
    return  n * fact(n - 1);
}