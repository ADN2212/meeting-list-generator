(function (){


	var btn = document.getElementById("get-members-btn")
	var list = document.getElementById("members-list")
	var memberNum = 1

	btn.addEventListener("click", () => {
		list.innerHTML += `<li> Member-${memberNum}</li>`
		memberNum += 1
	})

})()
