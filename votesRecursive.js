const puppeteer = require("puppeteer");
const numbers = require("./senateBillNumbers.js");

extractBill("https://leg.colorado.gov/bills/SB18-002")


// function urlAppendBill(numbers) {
//   if (!numbers) throw new Error('Numbers needs to NOT be null')
//   return numbers.map(n => `https://leg.colorado.gov/bills/${n}`)
// }

async function extractBill(url){
  const browser = await puppeteer.launch({headless: false});
  const urls = await extractUrls(url, browser);
  console.log(JSON.stringify(urls))
  // await browser.close();
  return urls;
}

const extractUrls = async (url, browser) => {
  const page = await browser.newPage();
  await page.goto(url);
  const chamberSelection = await page.evaluate(() => {
    // const chamberVoteSections = document.querySelectorAll("#bill-documents-tabs4 > ul > li"); 

    let titles = Array.from(document.querySelectorAll('.accordion-title h5'));
    let house = titles.find(el => el.innerText.indexOf('House Votes') > -1);
    // Array.from(house.parentNode.parentNode.querySelectorAll('tr'));
    
    function extractSection(voteSection) {
      const section = Array.from(house.parentNode.parentNode.querySelectorAll('tbody tr'))
      // console.log(section)
      const items = [];
      console.log(section.length)
      for (let i = 0; i < section.length; i++) {
      
        let tableData = section[i].querySelector("td[data-label='Motion'] div.field-item").innerText;
        if (tableData === "REPASS") {
          const votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          items.push({link: votePageLink, motion: "repass"});
          // return items
        } else if (tableData === "BILL") {
          const votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          console.log(votePageLink)
          items.push({link: votePageLink, motion: "bill"});
          // return items
        } else {
          return console.log("no data", tableData)
        }
      }
      return items
    }

    return extractSection(house)
  }) 


//scrape the next page
// if (numbers.length < 1) {
//   //Terminate if no urls exist
//   return chamberSelection
// } else {
  
//   const nextPageNumber = url.match() +1;

//   const nextUrl = `https://leg.colorado.gov/bills/${nextPageNumber}`

  return chamberSelection
  }

(async () => {
  try {

  //Extract bills on page, recursively check next page in URL pattern.
  
  // };
  // let i = 0;
  // const browser = await puppeteer.launch({headless: true});
  // const firstUrl = `https://leg.colorado.gov/bills/${numbers[i]}`;
  // const urls = await extractUrls(firstUrl);

  // console.log(JSON.stringify(urls))
      

  // await browser.close();
  }catch(error){
    console.error("error: ", error);
  }

})();
