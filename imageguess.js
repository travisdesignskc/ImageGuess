// JavaScript Document


window.onload = init;

function init() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = showAnswer;
	}
};

function showAnswer(e) {
	var image = e.target;
	var name = image.id;
	name = "images/" + name + ".jpg";
	image.src = name;
}


