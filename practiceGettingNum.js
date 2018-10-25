
const numbers = require("./senateBillNumbers.js")

// function urlAppendBill(numbers) {
//   if (!numbers) throw new Error('Numbers needs to NOT be null')
//   return numbers.map(n => `https://leg.colorado.gov/bills/${n}`)
// }

// console.log(urlAppendBill(numbers))



function urlAppendBill(numbers) {
  if (!numbers) throw new Error('Numbers needs to NOT be null')
  let urlString = numbers.map(n => `https://leg.colorado.gov/bills/${n}`)
  return cycleNumbers(urlString)
}


function cycleNumbers(urlAppendBill) {
  for (let i = 0; i < urlAppendBill.length; i++) {
    console.log(urlAppendBill[i])
  }
}

urlAppendBill(numbers);


