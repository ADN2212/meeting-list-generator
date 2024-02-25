// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

// chrome.action.onClicked.addListener(async (tabID) => {
//     await chrome.tabs.sendMessage(tabID, {
//       type: "OK",
//       data: "fetchedData"
//   })
// })

// chrome.action.onClicked.addListener((tab) => {
//   console.log("Way!!")
//   // chrome.scripting.executeScript({
//   //   target: { tabId: tab.id },
//   //   files: ["scripts/content.js"]
//   // });
// });

// chrome.tabs.onUpdated.addListener(
//   (tabID, tab) => {
//     //Esto se va a ver en la consola de la extencion.
//     console.log(tabID)
//     //console.log(tab)
//     console.log("Fetching data from Google Meet API ...")
//     // if (tab.url){
//     //   console.log(tab.url)
//     // }

//     //
//     let dataWasFectched = false

//     //Esto envia mensajes a content.js:
//     if (dataWasFectched) {
//       chrome.tabs.sendMessage(tabID, {
//         type: "OK",
//         data: "fetchedData"
//       })
//     } else {
//       chrome.tabs.sendMessage(tabID, {
//         type: "FAILED",
//       })
//     }
//   }
// )

// chrome.tabs.onUpdated.addListener(async (tabID, tab) => {
//   //chrome.tabs.executeScript(tabID, { file: "content.js" });


//   let languaje = await chrome.tabs.detectLanguage()

//   console.log(languaje == "")
//   console.log(chrome.tabs)

//   // chrome.scripting.executeScript({
//   //   target: { tabId: tabID },
//   //   files: ["content.js"],
//   // });
// });


// chrome.browserAction.onClicked.addListener(() => {

//   console.log("Wey")

// })


// chrome.tabs.query({active: true}, function(tabs) {
//   var tabId = tabs[0].id;
//   chrome.tabs.sendMessage(tabId, {saludo: "Hola desde el background.js"}, function(response) {
//     console.log("Respuesta del content.js:", response);
//   });
// });




function injectedFunction() {
  document.body.style.backgroundColor = "red";
}


function getCurrentUrl() {
  //return window.location.href
  console.log(window.location.href)//Esto no es posible e todas las paginas.
  //console.log("Hola")
}


chrome.tabs.onUpdated.addListener((tabID, tab) => {
  console.log(tabID)
  chrome.scripting.executeScript({
    target : {tabId : tabID},
    func : getCurrentUrl,//esta funcion se ejecutara cuando suceda el evento.
  });




});


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting === "hello")
//       sendResponse({farewell: "goodbye"});
//   }
// );












