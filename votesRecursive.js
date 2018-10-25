const puppeteer = require("puppeteer");
// const numbers = require("./senateBillNumbers.js");
const numbers = require("./houseBillNumbers.js");

(async () => {
  try {

    const dataSet = await urlAppendBill(numbers);
    console.log(dataSet.reduce((acc, val) => acc.concat(val), []));

    async function urlAppendBill(numbers) {
      if (!numbers) throw new Error('Numbers needs to NOT be null')
      let urlStrings = numbers.map(n => `https://leg.colorado.gov/bills/${n}`)
      return cycleNumbers(urlStrings)
    }

    async function cycleNumbers(urlString) {
      const results = []
      for (let i = 0; i < urlString.length; i++) {
        results.push(await extractBill(urlString[i]))
      }
      return results
    }

    async function extractBill(url) {
      const browser = await puppeteer.launch({
        headless: true
      });
      const urls = await extractUrls(url, browser);
      // console.log(JSON.stringify(urls, null, 2))
      await browser.close();
      return urls;
    }
    
    async function extractUrls(url, browser) {
      const page = await browser.newPage();
      await page.goto(url);
      const chamberSelection = await page.evaluate(() => {
        let titles = Array.from(document.querySelectorAll('.accordion-title h5'));
        let house = titles.find(el => el.innerText.indexOf('House Votes') > -1);
        let senate = titles.find(el => el.innerText.indexOf('Senate Votes') > -1);
        function extractSection(voteSection) {
          const section = Array.from(voteSection.parentNode.parentNode.querySelectorAll('tbody tr'))
          const items = [];
          console.log(section.length)
          for (let i = 0; i < section.length; i++) {
            let tableData = section[i].querySelector("td[data-label='Motion'] div.field-item").innerText;
            if (tableData === "REPASS") {
              const votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
              items.push(
                votePageLink
              );
            } else if (tableData === "BILL") {
              const votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
              console.log(votePageLink)
              items.push(
                votePageLink
              );
            } else {
              console.log("no data", tableData)
            }
          }
          return items
        }
        function selectOneBill(items) {
          let item = items.slice(0,1);
          return item;
        }
        return selectOneBill(extractSection(house)).concat(selectOneBill(extractSection(senate)))
      })
      return chamberSelection
    }

  } catch (error) {
    console.error("error: ", error);
  }

})();