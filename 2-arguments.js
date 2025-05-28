const { argv } = require('node:process'); // Destructuring assignment
const userArgs = argv.slice(2);

if (userArgs.length == 0){
    console.log("No argument")
} else if (userArgs.length == 1){
    console.log("Argument found")
 }else {
    console.log("Arguments found")
 }
