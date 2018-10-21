const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://leg.colorado.gov/bill-search?field_chamber=All&field_bill_type=75&field_sessions=45771&sort_bef_combine=field_bill_number%20ASC");
  const bills = await page.evaluate(() => {
    
    return Array.from(document.querySelectorAll("div.views-row > article > div")).map((section, i) => {
      const bill = {};
      if (i === 0) {
        bill["bill"] = section.querySelector("header > div > div > div.field-item").innerText;
        bill["title"] = section.querySelector("header > h4 > a").innerText;
        bill["bill_url"] = section.querySelector("header > h4 > a").href;
        bill["description"] = section.querySelector("header > div.field-name-field-bill-long-title > div.field-items > div.field-item").innerText;
        bill["last_action"] = section.querySelector("div.bill-last-action > span").innerText;
        let sponsorArray = Array.from(section.querySelectorAll("div.bill-sponsors a")).map(sponsor => sponsor.innerText)
        bill["sponsors"] = sponsorArray

      } else if (i === 1) {
        let subjectArray = Array.from(section.querySelectorAll("div.bill-subjects div.field-item")).map(subject => subject.innerText);
        bill["subject"] = subjectArray;
      } 
      
      return bill
    })
  })
  
  console.log(JSON.stringify(bills))
 
  await browser.close();
})();