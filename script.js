var h3 = document.querySelector("h3");
var colorOne = document.querySelector(".color-1");
var colorTwo = document.querySelector(".color-2");
var body = document.querySelector("body");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + colorOne.value + " ," + colorTwo.value + ")";
	h3.textContent = body.style.background+ ";";
}

colorTwo.addEventListener("input", setGradient);
colorOne.addEventListener("input", setGradient);

