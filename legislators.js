const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://leg.colorado.gov/legislators");
  const legislators = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("tbody tr")).map(row => {
      const person = {};
      Array.from(row.querySelectorAll("td")).forEach((col, index) => {
        let key = "";
        if (index === 0) {
          key = "title";
        } else if (index === 1) {
          key = "name"
        } else if (index === 2) {
          key = "district"
        } else if (index === 3) {
          key = "party"
        } else if (index === 4) {
          key = "phone"
        } else {
          key = "email"
        }
        person[key] = col.innerText.trim()
      })
      return person
    })
  })
  console.log(JSON.stringify(legislators))
 
  await browser.close();
})();