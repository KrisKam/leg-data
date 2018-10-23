const puppeteer = require("puppeteer");

(async () => {
  try {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto("https://leg.colorado.gov/bills/sb18-001");

  const chamberSelection = await page.evaluate(() => {
    const rows = document.querySelectorAll("#bill-documents-tabs4 tr");
    return Array.from(rows).map((row, index) => {
      const items = [];
      Array.from(row.querySelectorAll("td div.field-item")).forEach((item, i) => {
        if (item.innerText === "REPASS")
        items.push(row.querySelector("a").href)
        let votePageLink = row.querySelector("a").href
        page.click(votePageLink)
      
      })
      return items
    })
  })

  console.log("cs: ", chamberSelection)
 
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

