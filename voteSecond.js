const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("view-source:https://leg.colorado.gov/bills/sb18-002");

    const voteTab = document.querySelector("div#bill-documents-tabs4 > h2")

    console.log(voteTab.innerText)

    // await page.screenshot({path: 'example.png'});

    await browser.close();

}catch(error){
  console.error("error: ", error);
}

})();