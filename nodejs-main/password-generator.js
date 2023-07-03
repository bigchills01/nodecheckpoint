
const generator = require('generate-password')



const password = generator.generate({
  length: 10,
  numbers: true,
  symbols: true,
})
console.log('Your One Time Password:')
console.log(password)
console.log('--------------------------')



// To generate multiple passwords at once 
const passwordM = generator.generateMultiple(5, {
  length: 15,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: false
})

console.log('Your Requested Passwords:')
console.log(passwordM)