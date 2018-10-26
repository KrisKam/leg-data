const puppeteer = require("puppeteer");
const urls = require("./houseUrls.js");
// const urls = require("./senateUrls.js");

(async () => {
  try {

    const dataSet = await cycleUrls(urls);
    // console.log(dataSet.reduce((acc, val) => acc.concat(val), []));

    async function cycleUrls(urls) {
      const results = []
      for (let i = 0; i < urls.length; i++) {
        results.push(await extractBillVotes(urls[i]))
      }
      console.log(JSON.stringify(results))
      return results
    }

    async function extractBillVotes(url) {
      const browser = await puppeteer.launch({
        headless: true
      });
      const votes = await extractVotes(url, browser);
      // console.log(JSON.stringify(urls, null, 2))
      await browser.close();
      return votes;
    }
    
    async function extractVotes(url, browser) {
      const page = await browser.newPage();
      await page.goto(url);

      const votes = await page.evaluate(() => {
        const bill = {};
        const table = document.querySelector("tbody");
        bill["bill"] = table.querySelector("tr:nth-child(1) > td > div > b").innerText;
        bill["chamber"] = table.querySelector("tr:nth-child(1) > td > div > font:nth-child(4)").innerText;
        bill["motion"] = table.querySelector("tr:nth-child(1) > td > div > font:nth-child(10)").innerText
        bill["summary"] = {
          "Aye": table.querySelector("tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > font").innerText,
          "No": table.querySelector("tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > font").innerText,
          "Absent": table.querySelector("tr:nth-child(3) > td:nth-child(2) > font").innerText,
          "Excused": table.querySelector("tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(4) > font").innerText
        }
        const voteData = Array.from(document.querySelectorAll("form > table > tbody > tr:nth-child(3) > td"));
        const memberVotes = [];
        voteData.forEach(column => {
          const cells = Array.from(column.querySelectorAll("tr"))    
          for (let i = 1; i < cells.length; i++) {
            let name = cells[i].querySelector("td:nth-child(1) > font").innerText;
            let vote = cells[i].querySelector("td:nth-child(2) > div > font").innerText;
            console.log(name, vote);
            memberVotes.push({
              "name": name,
              "vote": vote
            })
          }
        })
        bill["votes"] = memberVotes;
        return bill;
      })
      
      return votes

    }

  } catch (error) {
    console.error("error: ", error);
  }

})();