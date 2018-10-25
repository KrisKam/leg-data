const puppeteer = require("puppeteer");
const numbers = require("./senateBillNumbers.js");


(async () => {
  try {

    urlAppendBill(numbers);

    async function urlAppendBill(numbers) {
      if (!numbers) throw new Error('Numbers needs to NOT be null')
      let urlString = numbers.map(n => `https://leg.colorado.gov/bills/${n}`)
      return cycleNumbers(urlString)
    }

    async function cycleNumbers(urlString) {
      for (let i = 0; i < urlString.length; i++) {
        await extractBill(urlString[i])
      }
    }

    async function extractBill(url) {
      const browser = await puppeteer.launch({
        headless: true
      });
      const urls = await extractUrls(url, browser);
      console.log(JSON.stringify(urls, null, 2))
      // await browser.close();
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
              items.push({
                link: votePageLink,
                motion: "repass"
              });
              // return items
            } else if (tableData === "BILL") {
              const votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
              console.log(votePageLink)
              items.push({
                link: votePageLink,
                motion: "bill"
              });
              // return items
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
        
        return {
          house: selectOneBill(extractSection(house)),
          senate: selectOneBill(extractSection(senate))
        }

      })

      return chamberSelection
    }


    // await browser.close();
  } catch (error) {
    console.error("error: ", error);
  }

})();