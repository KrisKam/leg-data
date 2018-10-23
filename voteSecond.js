
//Tuesday

const puppeteer = require("puppeteer");

(async () => {
  try {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto("https://leg.colorado.gov/bills/sb18-002");

  const chamberSelection = await page.evaluate(() => {  
    const items = {};
    const rows = document.querySelectorAll("#bill-documents-tabs4 tr");
    return Array.from(rows).map((row, index) => {
      // const items = {};
      Array.from(row.querySelectorAll("td div.field-item")).forEach((item) => {
        if (item.innerText === "REPASS") {
          let votePageLink = row.querySelector("a").href
          items["repass"] = votePageLink
          
        } else if (item.innerText === "BILL") {
          let votePageLink = row.querySelector("a").href
          items["bill"] = votePageLink
        } 
     })
      // return items
    })
    return items
  })

  console.log("selection: ", chamberSelection)
 
  // const finalVotes = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll("tbody tr")).map(row => {
      
  //     return person
  //   })
  // })
  // console.log(JSON.stringify(finalVotes))
  await page.screenshot({path: 'example.png'});

  await browser.close();
  }catch(error){
    console.error("error: ", error);
  }

})();

