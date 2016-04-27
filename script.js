console.log("say hello")

function changeColor(el) {
	if (el.classList.contains("purple")) {
		removeClass(el, "purple");
	}
	else {
		addClass(el, "purple");
	};
}

function addClass(el, className){
	el.classList.add(className);
}

function removeClass(el, className){
	el.classList.remove(className);
}

function changeListColor() {
	var items = document.getElementsByClassName("list-item");
	for (var i = 0; i < items.length; i++) {
		addClass(items[i], "orange");
	};
}

function changeListBack() {
	var items = document.getElementsByClassName("list-item");
	for (var i = 0; i < items.length; i++) {
		removeClass(items[i], "orange");	
	}
}

function disappearParagraph() {
	var p = document.getElementById("first-P");
	addClass(p, "disappear");
}

function reappearParagraph() {
	var p = document.getElementById("first-P");
	removeClass(p, "disappear");
}

function paragraphColorChanger() {
	var p = document.getElementById("second-P");
	if (p.classList.contains("blue-back")){
		removeClass(p, "blue-back");
		addClass(p, "orange-back");
	}
	else if (p.classList.contains("orange-back")) {
		removeClass(p, "orange-back");
	}
	else {
		addClass(p, "blue-back");
	}
}

function changeWord() {
	var t = document.getElementsByTagName("title");
	t[0].innerHTML = "Eon 7, Day 2 Practice";

	var h = document.getElementsByTagName("h1");
	h[0].innerHTML = "Eon 7, Day 2 Practice";
}

function changeWordBack(el) {
	el.innerHTML = "Week 7, Day 2 Practice";
	var t = document.getElementsByTagName("title");
	t[0].innerHTML = "Week 7, Day 2 Practice";
}

function rightJustify(el) {
	var p = document.getElementById("third-P");
	addClass(p, "right-justify");
}

function linkAndDisappear(el) {
	addClass(el, "disappear-photo");
	var l = document.getElementById("catLink");
	l.innerHTML = "this link";
}

function linkAndReappear(el) {
	var i = document.getElementById("catPic");
	removeClass(i, "disappear-photo");
	el.innerHTML = "THIS LINK!!";
}

function changeParagraph(el) {
	var newParagraph = prompt("Please enter a word or phrase");
	el.innerHTML = newParagraph;
}





