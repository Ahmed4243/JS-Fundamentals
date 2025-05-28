const { argv } = require('node:process'); // Destructuring assignment
const userArgs = argv.slice(2);

if (userArgs.length == 0){
    console.log("No argument found")
} else{
    console.log("Arguments found")
}
