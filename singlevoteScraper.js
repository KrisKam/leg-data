const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://leg.colorado.gov/content/hb18-1002vote546f1e");
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
        console.log(cells[i]);
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
  console.log(JSON.stringify(votes))
 
  await browser.close();
})();