import {coinFlips, countFlips} from './modules/coin.mjs'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

const args = require('minimist')(process.argv.slice(2))
const number = args["number"] || 1

let array = coinFlips(number)
console.log(array)

console.log(countFlips(array))
