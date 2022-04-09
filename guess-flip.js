import 'coin.mjs'

const { coinFlip } = require('./modules/coin.mjs')

const args = require('minimist')(process.argv.slice(2))
args["call"]

// add an error message here if argument is not 'head' or 'tails'

console.log(flipACoin(args.call))