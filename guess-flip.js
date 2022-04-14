import {flipACoin} from './modules/coin.mjs'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

//var args = process.argv.slice(2)

const args = require('minimist')(process.argv.slice(2))
let call = args["call"]

// add an error message here if argument is not 'head' or 'tails'
if (call != 'heads' || 'tails') {
    throw 'Error: no imput.'
}



console.log(flipACoin(call))