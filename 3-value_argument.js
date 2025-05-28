const { argv } = require('node:process')
const userArgs = argv.slice(2)

if (userArgs[0] == undefined) {
    console.log('No argument')
} else {
    console.log(userArgs[0])
}