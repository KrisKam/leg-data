// const puppeteer = require("puppeteer");

// (async () => {
//   try {
//   const browser = await puppeteer.launch({headless: true});
//   const page = await browser.newPage();

//   await page.goto("https://leg.colorado.gov/bills/sb18-001");

//   const chamberSelection = await page.evaluate(() => {
//       const chamberVoteSections = document.querySelectorAll("#bill-documents-tabs4 > ul > li");
    
//     return Array.from(chamberVoteSections).map((voteSection) => {
//       const section = Array.from(voteSection.querySelectorAll("tr"));

//       for (let i = 1; i < section.length; i++) {
//         // const link = section[i].querySelectorAll("td");
//         const items = {};
//         let votePageLink;
//         let tableData = section[i].querySelector("td[data-label='Motion'] div.field-item").innerText;
//         if (tableData === "REPASS") {
//           votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
//           items["repass"] = votePageLink;
//             return items
//         } else if (tableData === "BILL") {
//           votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
//           items["bill"] = votePageLink;
//             return items
//         } 
//       }
//     })
//   }) 
 
//   let reducedArray = []

//   const reduce = chamberSelection.map(singleArr => {
//     let firstObj = singleArr.find(obj => obj.repass)
//     if (firstObj !== undefined) {
//       reducedArray.push(firstObj)
//     }
//     if (firstObj === undefined) {
//       let secondObj = singleArr.find(obj => obj.bill)
//     reducedArray.push(secondObj)
//     }
//   })

//   console.log(JSON.stringify(reducedArray))
  

//   await browser.close();
//   }catch(error){
//     console.error("error: ", error);
//   }

// })();



//--------------------------------------------

const puppeteer = require("puppeteer");

(async () => {
  try {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto("https://leg.colorado.gov/bills/sb18-002");

  const chamberSelection = await page.evaluate(() => {
      const chamberVoteSections = document.querySelectorAll("#bill-documents-tabs4 > ul > li");
    
    return Array.from(chamberVoteSections).map((voteSection) => {
      const section = Array.from(voteSection.querySelectorAll("tr"));

      for (let i = 1; i < section.length; i++) {
        // const link = section[i].querySelectorAll("td");
        const items = {};
        let votePageLink;
        let tableData = section[i].querySelector("td[data-label='Motion'] div.field-item").innerText;
        if (tableData === "REPASS") {
          votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          items["repass"] = votePageLink;
            return items
        } else if (tableData === "BILL") {
          votePageLink = section[i].querySelector("td[data-label='Vote Document'] a").href;
          items["bill"] = votePageLink;
            return items
        } 
      }
    })
  }) 
  
      
  console.log(chamberSelection)
  

  await browser.close();
  }catch(error){
    console.error("error: ", error);
  }

})();
