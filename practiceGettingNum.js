// const numbers = require("./senateBillNumbers.js");


    // const nextPageNumber = numbers[i + 1]

    // const nextUrl = `https://leg.colorado.gov/bills/sb18-${nextPageNumber}`

    // return chamberSelection.concat(await extractUrls(nextUrl))

    const num = fetch("./senateBillNumbers.js")
    .then(response => response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))

    console.log(num)