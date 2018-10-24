const puppeteer = require("puppeteer");

(async () => {
  try {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto("https://leg.colorado.gov/bills/hb18-1128");

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
 
  let reducedArray = []

  const reduce = chamberSelection.map(singleArr => {
    let firstObj = singleArr.find(obj => obj.repass)
    if (firstObj !== undefined) {
      reducedArray.push(firstObj)
    }
    if (firstObj === undefined) {
      let secondObj = singleArr.find(obj => obj.bill)
    reducedArray.push(secondObj)
    }
  })

  console.log(JSON.stringify(reducedArray))
  

  await browser.close();
  }catch(error){
    console.error("error: ", error);
  }

})();

