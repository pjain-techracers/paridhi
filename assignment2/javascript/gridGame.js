function changeColor(element) {
  try {
    var color = document.querySelector('input[name=color]:checked').value;
    element.style.background = color;
  }
  catch(e) {
      alert("first choose any color ");
  }
}

function setBack() {
  var className = document.getElementsByClassName("grid-item");
  for (var i = 0; i < className.length; i++) {
    className[i].style.background = "grey";
  }
}
