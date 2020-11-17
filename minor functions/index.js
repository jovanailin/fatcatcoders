const config = require("./config.js")
const functions = require("./functions.js")

console.log(functions.random(config.min,config.max))
console.log(functions.minIntegerFromArray(config.array))
