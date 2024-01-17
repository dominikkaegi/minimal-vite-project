// Importing form another module.
import {add} from './src/add'

console.log('welcome from a module built with vite')

const a = 6
const b = 5
const result = add(a, b)

console.log(`${a} + ${b} = ${result}`)

