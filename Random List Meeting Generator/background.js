// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });


// chrome.action.onClicked.addListener(async (tab) => {
//   console.log("Click ?")
// })


// chrome.action.onClicked.addListener((tab) => {
//   console.log("Way!!")
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["scripts/content.js"]
//   });
// });


chrome.tabs.onUpdated.addListener(
  (tabID, tab) => {
    //Esto se va a ver en la consola de la extencion.
    console.log(tabID)
    //console.log(tab)
    console.log("Fetching data from Google Meet API ...")
    // if (tab.url){
    //   console.log(tab.url)
    // }
    
    //
    let dataWasFectched = false

    //Esto envia mensajes a content.js:
    if (dataWasFectched) {
      chrome.tabs.sendMessage(tabID, {
        type: "OK",
        data: "fetchedData"
      })
    } else {
      chrome.tabs.sendMessage(tabID, {
        type: "FAILED",
      })
    }
  }
)

