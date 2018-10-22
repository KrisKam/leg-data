const puppeteer = require("puppeteer");

(async () => {

  //Extract bills on page, recursively check next page in URL pattern.
  const extractBills = async url => {

    //Scrape the data
    const page = await browser.newPage();
    await page.goto(url);

    const billsOnPage = await page.evaluate(() => {
    
      return Array.from(document.querySelectorAll("div.view-content > div.views-row > article")).map((section, i) => {
        const bill = {};
  
        bill["bill"] = section.querySelector("div.search-main > header > div > div > div.field-item").innerText;
        bill["title"] = section.querySelector("div.search-main > header > h4 > a").innerText;
        bill["bill_url"] = section.querySelector("div.search-main > header > h4 > a").href;
        bill["description"] = section.querySelector("div.search-main > header > div.field-name-field-bill-long-title > div.field-items > div.field-item").innerText;
        bill["last_action"] = section.querySelector("div.search-main > div.bill-last-action > span").innerText;
        
        let sponsorArray = Array.from(section.querySelectorAll("div.search-main > div.bill-sponsors a")).map(sponsor => sponsor.innerText)
        bill["sponsors"] = sponsorArray
  
        let subjectArray = Array.from(section.querySelectorAll("div.search-aside > div.bill-subjects div.field-item")).map(subject => subject.innerText);
        bill["subject"] = subjectArray;
        
        return bill
      })
    })

    await page.close();

    //Recursively scrape the next page
    if (billsOnPage.length < 1) {
      //Terminate if no bills exist
      return billsOnPage;
    } else {
      //Go fetch the next page
      const nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) +1;
      const nextUrl = `https://leg.colorado.gov/bill-search?field_chamber=All&field_bill_type=75&field_sessions=45771&sort_bef_combine=field_bill_number%20ASC&page=${nextPageNumber}`

      return billsOnPage.concat(await extractBills(nextUrl))
    }

  };


  const browser = await puppeteer.launch();
  const firstUrl = "https://leg.colorado.gov/bill-search?field_chamber=All&field_bill_type=75&field_sessions=45771&sort_bef_combine=field_bill_number%20ASC&page=0";
  const bills = await extractBills(firstUrl);

  console.log(JSON.stringify(bills))
 
  await browser.close();
})();