//gombkészítés
var objplaceFruitsButton = document.querySelector('#placeFruitsButton');
var i;

function makeFruitsButton2() {
  var objfruitsbutton = document.createElement('BUTTON');
  var objButtonImg = document.createElement('IMG');

  objplaceFruitsButton.appendChild(objfruitsbutton);
  objfruitsbutton.classList.add('fruitsbutton');
  objfruitsbutton.appendChild(objButtonImg);
  objButtonImg.setAttribute('src', toString(buttonImagesPlace[i]));
}

function makeFruitsButton() {
  for (var i = 0; i < buttonImagesPlace.length; i++) {
    makeFruitsButton2(buttonImagesPlace, objplaceFruitsButton);
  }
}