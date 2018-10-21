
const puppeteer = require("puppeteer");

(async () => {

  // Bill info on the page, recursively check the next page in the URL pattern
  const extractBillInfo = async url => {
    
    // Scrape the data we want
    const page = await browser.newPage();
    await page.goto(url);
    const billInfoOnPage = await page.evaluate(() => {

      const bill = {};

      Array.from(document.querySelectorAll("div.views-row > article > div > header > div > div > div")).forEach((section) => {

        console.log("is something here?")
        bill["number"] = section.innerText
      })
      return bill}
    );
  
 
    await page.close();

    // Recursively scrape the next page
    if (billInfoOnPage.length < 1) {
      // Terminate if no bills exist
      return billInfoOnPage
    } else {
      // Go fetch the next page ?page=X+1
      const nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) + 1;
      const nextUrl = `https://leg.colorado.gov/bill-search?field_chamber=All&field_bill_type=75&field_sessions=45771&sort_bef_combine=field_bill_number%20ASC&page=${nextPageNumber}`;

      return billInfoOnPage.concat(await extractBillInfo(nextUrl))
    }
  };

  const browser = await puppeteer.launch();
  const firstUrl =
    "https://leg.colorado.gov/bill-search?field_chamber=All&field_bill_type=75&field_sessions=45771&sort_bef_combine=field_bill_number%20ASC&page=24";
  const bills = await extractBillInfo(firstUrl);

  // Todo: Update database with bills
  // console.log(JSON.stringify(bills));

  await browser.close();
})();