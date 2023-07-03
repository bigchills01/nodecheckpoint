const fs = require('fs')

const readWelcome = fs.readFileSync('welcome.txt', 'utf8')

console.log(readWelcome)