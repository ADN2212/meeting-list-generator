(function contentScriptModule() {
  chrome.runtime.onMessage.addListener((obj, _sender, _response) => {
    //Este
    console.log(obj);
    //console.log(sender)
    //console.log(response)

    if (obj.type === "New Meet") {
      console.log("A new meet has been detected");
        
    
    }



  });
})();
