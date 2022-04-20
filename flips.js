import {coinFlips, countFlips} from './modules/coin.mjs'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

const args = require('minimist')(process.argv.slice(2))
args["number"]

let array = coinFlips(args.number || 1)
console.log(array)

console.log(countFlips(array))
