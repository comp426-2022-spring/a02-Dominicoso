import "coin.mjs"

const args = require('minimist')(process.argv.slice(2))
args["number"]
const number = args.number || 1

let array = coinFlips(number)
console.log(array)

console.log(countFlips(array))
