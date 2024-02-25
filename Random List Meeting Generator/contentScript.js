// (function (){

// 	console.log("Yei")
// })()

// chrome.browserAction.onClicked.addListener(function() {
//   console.log("Hola mundo!");
// });

//(function DOMManipulationModule(){

//chrome.runtime.onMessage.addListener
//Esto agrega un listener a los mensajes que vienen del background.js:
// chrome.tabs.onMessage.addListener((obj, sender, response) => {
// 	console.log(obj);
// 	console.log(sender);
// 	console.log(response);
// });

//console.log("Yei")

//})()

// // content.js
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("Mensaje del background.js:", request.saludo);
//   sendResponse({respuesta: "Hola desde el content.js"});
// });


//document.body.style.backgroundColor = "orange";


// (async () => {
//   const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//   const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//   // do something with response here, not outside the function
//   console.log(response);
// })();


