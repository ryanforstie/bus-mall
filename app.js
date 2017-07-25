'use strict';
//
// function ProductImage(name) {
//   this.name = name;
//   // this.altTag = altTag;
//   this.source = 'img/' + this.name + '.jpg';
//   this.timesShown = 0;
//   ProductImage.all.push(this);
// }
//
// ProductImage.all = [];
// // ProductImage.allNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
// ProductImage.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//
// for(var i = 0; i < ProductImage.allNames.length; i++) {
//   new ProductImage(ProductImage.allNames[i]);
// }
//
// ProductImage.imgEl = document.getElementById('the_image');
//
// function randomImage(e){
//   console.log(e.target.alt);
//   if(e.target.alt === 'nine'){
//     alert('OMG A BABY GOAT');
//   }
//   var randomIndex = Math.floor(Math.random() * ProductImage.all.length);
//   ProductImage.imgEl.src = ProductImage.all[randomIndex].source;
//   ProductImage.imgEl.alt = ProductImage.all[randomIndex].name;
//   ProductImage.all[randomIndex].timesShown += 1;
//   // console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
// }
//
// document.getElementById('the_image').addEventListener('click', randomImage);
//
// randomImage();


var totalClicks = 0;
var img1 = 0;
var img2 = 0;
var img3 = 0;
var imageSelection = [];


function ProductImage(name, filepath, id) {
  this.name = name;
  this.filepath = filepath;
  this.id = id;
  this.timesShown = 0;
  this.numberClicked = 0;
}


// Image Data for each Product Image
var bag = new ProductImage('bag', 'img/bag.jpg', 'bag');
var banana = new ProductImage('banana', 'img/banana.jpg', 'banana');
var bathroom = new ProductImage('bathroom', 'img/bathroom.jpg', 'bathroom');

var imageArray = [bag, banana, bathroom];

function randomImage() {
  do {
    img1 = Math.floor(Math.random() * (imageArray.length + 1));
  } while (imageSelection.includes(img1) || img1 === img2 || img1 === num3 || img1 === 20);
  do {
    img2 = Math.floor(Math.random() * (imageArray.length + 1));
} while (imageSelection.includes(img1) || img2 === img1 || img2 === num3 || img2 === 20);
  do {
    img3 = Math.floor(Math.random() * (imageArray.length + 1));
} while (imageSelection.includes(img1) || img3 === img1 || img3 === num2 || img3 === 20);
};

imageSelection[0] = img1;
imageSelection[1] = img2;
imageSelection[3] = img3;
