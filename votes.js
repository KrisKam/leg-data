const puppeteer = require("puppeteer");

(async () => {
  try {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto("https://leg.colorado.gov/bills/sb18-002");

  const chamberSelection = await page.evaluate(() => {
    const chamberVoteSections = document.querySelectorAll("#bill-documents-tabs4 > ul > li");
    return Array.from(chamberVoteSections).map((voteSection) => {
      return Array.from(voteSection.querySelectorAll("td[data-label='Motion'] div.field-item")).map((item) => {
        const items = {};
        if (item.innerText === "REPASS") {
          let votePageLink = voteSection.querySelector("tbody a").href
          items["repass"] = votePageLink
        } else if (item.innerText === "BILL") {
          let votePageLink = voteSection.querySelector("tbody a").href
          items["bill"] = votePageLink
        } 
        return items
      }) 
    })
  })

  console.log("cs: ", chamberSelection)
 
  // const finalVotes = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll("tbody tr")).map(voteSection => {
      
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

