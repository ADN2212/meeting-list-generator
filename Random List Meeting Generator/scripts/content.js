(function DOMManipulationModule(){


	//Esto agrega un listener a los mensajes que vienen del background.js:
	chrome.runtime.onMessage.addListener(
		(obj, sender, response) => {
			console.log(obj)
			console.log(sender)
			console.log(response)
		}	
	)


	console.log("Yei")

})()
















