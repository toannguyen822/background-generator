var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
	var color1 = get_random_color();
	var color2 = get_random_color();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";

}
function get_random_color() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2); // pad with zero
  }
  return "#"+c()+c()+c();
}
button.addEventListener("click", setGradient)


//color1.addEventListener("input", setGradient);

//color2.addEventListener("input", setGradient);