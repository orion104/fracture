function runFracture() {

	var lilyNode = document.getElementById("Lily");
		
	document.onkeydown = function(event){
		if (event.key == "w") {
			moveLily(-10);
		}
		if (event.key == "s"){
			moveLily(10);
		}
		if (event.key == "a"){
			moveLilyrun(-10);
		}
		if (event.key == "d"){
			moveLilyrun(10)
		}
	}

	function moveLily(change_top){
		var current_top = parseInt(lilyNode.style.top);
		lilyNode.style.top = current_top + change_top;
	}
	function moveLilyrun(change_left){
		var current_left = parseInt(lilyNode.style.left);
		lilyNode.style.left = current_left + change_left;
	}	
}