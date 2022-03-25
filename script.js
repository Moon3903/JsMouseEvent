var dog = document.getElementById("dogPic");
var cat = document.getElementById("catPic");
var moving = false;

dog.addEventListener("mousedown", initialClick, false);
cat.addEventListener("mousedown", initialClick, false);
window.addEventListener("mouseup", mouseUp, false);
dog.addEventListener("touchstart", initialTouch, false);
cat.addEventListener("touchstart", initialTouch, false);
window.addEventListener("touchend", touchUp, false);

function touchMove(e) {
  if (e.changedTouches[0]) {
    var newX = e.changedTouches[0].clientX - 400;
    var newY = e.changedTouches[0].clientY - 400;

    console.log(newX);

    image.style.left = newX + "px";
    image.style.top = newY + "px";
  }
}

function touchUp() {
  console.log("masuk touch");
  // document.removeEventListener("mousemove", move);
  document.removeEventListener("touchmove", touchMove, false);
  moving = !moving;
  return;
}

function initialTouch(e) {
  if (moving) {
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("touchmove", touchMove, false);
  console.log("tii");
}

function move(e) {
  var newX = e.clientX - 400;
  var newY = e.clientY - 400;

  console.log(newX);

  image.style.left = newX + "px";
  image.style.top = newY + "px";
}

function mouseUp() {
  console.log("masuk");
  document.removeEventListener("mousemove", move);
  // document.removeEventListener("touchmove", move, false);
  moving = !moving;
  return;
}

function initialClick(e) {
  if (moving) {
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);
  // document.addEventListener("touchmove", move, false);
  console.log("sii");
}
