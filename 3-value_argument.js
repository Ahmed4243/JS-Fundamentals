const { argv } = require('node:process')
const userArgs = argv.slice(2)

if (userArgs.length == 0) {
    console.log('No argument')
} else {
    console.log(userArgs[0])
}