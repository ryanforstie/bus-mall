'use strict';
//
// function ProductImage(name, filepath) {
//   this.name = name;
//   this.filepath = filepath;
//   this.views = 0;
//   this.votes = 0;
//   ProductImage.all.push(this);
// }
//
// ProductImage.all = [];
// ProductImage.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//
// for(var i = 0; i < ProductImage.allNames.length; i++) {
//   new ProductImage(ProductImage.allNames[i]);
// }
//
// var displayLeft, displayCenter, displayRight;
// var left = document.getElementById('left');
// var center = document.getElementById('center');
// var right = document.getElementById('right');


// };
// function displayProductImages() {
//   do {
//     randomNum1 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum1) || randomNum1 === randomNum2 || randomNum1 === randomNum3 || randomNum1 === 20);
//   do {
//     randomNum2 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum2) || randomNum2 === randomNum1 || randomNum2 === randomNum3 || randomNum2 === 20);
//   do {
//     randomNum3 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum3) || randomNum3 === randomNum1 || randomNum3 === randomNum2 || randomNum3 === 20);
//   selectionNumbers[0] = randomNum1;
//   selectionNumbers[1] = randomNum2;
//   selectionNumbers[2] = randomNum3;
//   //log array to confirm non-repeating numbers are generated each time function is run
//   console.log( 'this is a sectionNumber', selectionNumbers);
// };
// document.getElementById('left').addEventListener('click', displayProductImages);
// document.getElementById('center').addEventListener('click', displayProductImages);
// document.getElementById('right').addEventListener('click', displayProductImages);

// displayProductImages();

//console will show name + was clicked when user clicks image ex. bag was clicked
//tally number of clicks
//console.table shows votes and views
//console shows just viewed array and currently showing array
//no duplicates, no 3 images show in a row
//if user does not click on imgage tell him to
//at 25 clicks display votes and views for each item
//turn of event listener - element.removeEventListener



// 'use strict';
//
// function Image(number) {
//   this.name = number;
//   this.source = 'img/' + this.name + '.jpg';
//   this.timesShown = 0;
//   Image.all.push(this);
// }
//
// Image.all = [];
// Image.allNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//
// for(var i = 0; i < Image.allNames.length; i++){
//   new Image(Image.allNames[i]);
// }
//
// Image.imgEl = document.getElementById('the_image');
//
// function randomImage(e){
//   console.log(e.target.alt);
//   if(e.target.alt === 'nine'){
//     alert('OMG A BABY GOAT');
//   }
//   var randomIndex = Math.floor(Math.random() * Image.all.length);
//   Image.imgEl.src = Image.all[randomIndex].source;
//   Image.imgEl.alt = Image.all[randomIndex].name;
//   Image.all[randomIndex].timesShown += 1;
//   // console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
// }
//
// document.getElementById('the_image').addEventListener('click', randomImage);
//
// randomImage();
//









var image_section = document.getElementById('image_section');
var imageSelection = [];
var totalClicks = 0;
var randomNum1 = 0;
var randomNum2 = 0;
var randomNum3 = 0;


function ProductImage(name, filepath, id) {
  this.name = name;
  this.filepath = filepath;
  this.id = id;
  this.views = 0;
  this.votes = 0;
}


// Image Data for each Product Image
var bag = new ProductImage('bag', 'img/bag.jpg', 'bag');
var banana = new ProductImage('banana', 'img/banana.jpg', 'banana');
var bathroom = new ProductImage('bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new ProductImage('boots', 'img/boots.jpg', 'boots');
var breakfast = new ProductImage('breakfast', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new ProductImage('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new ProductImage('chair', 'img/chair.jpg', 'chair');
var cthulhu = new ProductImage('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
var dogduck = new ProductImage('dogduck', 'img/dog-duck.jpg', 'dogduck');
var dragon = new ProductImage('dragon', 'img/dragon.jpg', 'dragon');
var pen = new ProductImage('pen', 'img/pen.jpg', 'pen');
var petsweep = new ProductImage('petsweep', 'img/pet-sweep.jpg', 'petsweep');
var scissors = new ProductImage('scissors', 'img/scissors.jpg', 'scissors');
var shark = new ProductImage('shark', 'img/shark.jpg', 'shark');
var sweep = new ProductImage('sweep', 'img/sweep.jpg', 'sweep');
var tauntaun = new ProductImage('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
var unicorn = new ProductImage('unicorn', 'img/unicorn', 'unicorn');
var usb = new ProductImage('usb', 'img/usb', 'usb');
var watercan = new ProductImage('watercan', 'img/watercan.jpg', 'watercan');
var wineglass = new ProductImage('wineglass', 'img/wine-glass.jpg', 'wineglass');

var imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var displayRandomImage = function() {
  do {
    randomNum1 = Math.floor(Math.random() * (imageArray.length + 1));
  } while (selectionNumbers.includes(randomNum1) || randomNum1 === num2 || randomNum1 === num3 || randomNum1 === 20);
  do {
    num2 = Math.floor(Math.random() * (imageArray.length + 1));
  } while (selectionNumbers.includes(num2) || num2 === randomNum1 || num2 === num3 || num2 === 20);
  do {
    num3 = Math.floor(Math.random() * (imageArray.length + 1));
  } while (selectionNumbers.includes(num3) || num3 === randomNum1 || num3 === num2 || num3 === 20);
  selectionNumbers[0] = randomNum1;
  selectionNumbers[1] = randomNum2;
  selectionNumbers[2] = randomNum3;
  console.log( 'this is a sectionNumber', selectionNumbers);
};
