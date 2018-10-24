const puppeteer = require("puppeteer");

(async () => {
  try {

  //Extract bills on page, recursively check next page in URL pattern.
  const extractUrls = async url => {

    //Scrape data
    const page = await browser.newPage();
    await page.goto(url);

    const chamberSelection = await page.evaluate(() => {
      const chamberVoteSections = document.querySelectorAll("#bill-documents-tabs4 > ul > li");
    
    return Array.from(chamberVoteSections).map((voteSection) => {
      const section = Array.from(voteSection.querySelectorAll("tr"));

      for (let i = 1; i < section.length; i++) {
        const items = {};
        let votePageLink;
        let tableData = section[i].querySelector("td[data-label='Motion'] div.field-item").innerText;
        if (tableData === "REPASS") {
          votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          items["repass"] = votePageLink;
            return items
        } else if (tableData === "BILL") {
          votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          items["bill"] = votePageLink;
            return items
        } 
      }
    })
  }) 

  await page.close();

  //Recursively scrape the next page
  if (chamberSelection.length < 1) {
    //Terminate if no urls exist
    return chamberSelection
  } else {
    const nextPageNumber = parseInt(url.match(/sb18=(\d+)$/)[1], 10) +1;
    const nextUrl = `https://leg.colorado.gov/bills/sb18-${nextPageNumber}`

    return chamberSelection.concat(await extractUrls(nextUrl))
    }
  };

  const browser = await puppeteer.launch({headless: true});
  const firstUrl = "https://leg.colorado.gov/bills/sb18-001";
  const urls = await extractUrls(firstUrl);

  console.log(JSON.stringify(urls))
      

  await browser.close();
  }catch(error){
    console.error("error: ", error);
  }

})();
