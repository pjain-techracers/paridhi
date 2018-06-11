function changeColor(element) {
  if(document.getElementById("red").checked) {
    element.style.background = "red";
  }
  else if(document.getElementById("blue").checked) {
    element.style.background = "blue";
  }
  if(document.getElementById("green").checked) {
    element.style.background = "green";
  }
}

function setBack() {
  var className = document.getElementsByClassName("grid-item");
  for (var i = 0; i < className.length; i++) {
    className[i].style.background = "grey";
  }
}
