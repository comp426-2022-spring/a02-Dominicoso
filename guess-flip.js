import {flipACoin} from './modules/coin.mjs'
import {createRequire} from 'module'
import { urlToHttpOptions } from 'url'

const require = createRequire(import.meta.url)

//var args = process.argv.slice(2)

const args = require('minimist')(process.argv.slice(2))
args["call"]

let options = ['heads', 'tails']

// add an error message here if argument is not 'head' or 'tails'
if (options.includes(args.call)) {
    console.log(flipACoin(args.call))
} else {
    console.error('Error: no input.')
    console.log('Usage: node guess-flip --call=[heads|heads]')
}