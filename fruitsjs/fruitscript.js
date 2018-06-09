//gombkészítés
var objplaceFruitsButton = document.querySelector("#placeFruitsButton");
var i;
console.log(buttonImagesPlace);

function makeFruitsButton2(buttonImagesPlace, objplaceFruitsButton) {
  var objfruitsbutton = document.createElement("BUTTON");
  var objButtonImg = document.createElement("IMG");

  objplaceFruitsButton.appendChild(objfruitsbutton);
  objfruitsbutton.classList.add("fruitsbutton");
  objfruitsbutton.appendChild(objButtonImg);
  objButtonImg.setAttribute("src", buttonImagesPlace);
}

function makeFruitsButton() {
  for (var i = 0; i < buttonImagesPlace.length; i++) {
    makeFruitsButton2(buttonImagesPlace[i], objplaceFruitsButton);
  }
}