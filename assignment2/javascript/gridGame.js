function changeColor(elem) {
  if(document.getElementById("red").checked){
    elem.style.background = "red";
  }
  else if(document.getElementById("blue").checked){
    elem.style.background = "blue";
  }
  if(document.getElementById("green").checked){
    elem.style.background = "green";
  }
}
function setBack(){ 
  var classname = document.getElementsByClassName("grid-item");
  for (var i = 0; i < classname.length; i++) {
  classname[i].style.background = "grey";
  }
}


