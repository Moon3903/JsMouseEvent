var dog = document.getElementById("dogPic");
var cat = document.getElementById("catPic");
var moving = false;

dog.addEventListener("mousedown", initialClick, false);
cat.addEventListener("mousedown", initialClick, false);
window.addEventListener("mouseup", mouseUp, false);

function move(e) {
  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";
}

function mouseUp() {
  console.log("masuk");
  document.removeEventListener("mousemove", move);
  moving = !moving;
  return;
}

function initialClick(e) {

  if(moving){
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);
  console.log("sii")
}

