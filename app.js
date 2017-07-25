'use strict';

//DATA SECTION

//CONSTUCTOR FUNCTION WITH INSTANCES DATA
function ProductImage(number) {
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';
  this.views = 0;
  this.votes = 0;
  ProductImage.all.push(this);
}

//TOTAL CLICK COUNTER
ProductImage.totalClicks = 0;

//ARRAY DATA
ProductImage.all = [];
ProductImage.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wine-glass'];

for(var i = 0; i < ProductImage.allNames.length; i++) {
  new ProductImage(ProductImage.allNames[i]);
};

//DOM ELEMENTS FOR 3 IMAGES AND IMAGE SECTION
ProductImage.leftImage = document.getElementById('left');
ProductImage.centerImage = document.getElementById('center');
ProductImage.rightImage = document.getElementById('right');
ProductImage.container = document.getElementById('imageSection');

function generateRandomNumber() {
  return Math.floor(Math.random() * ProductImage.all.length);
}
//DISPLAY 3 RANDOM IMAGES THAT DO NOT DUPLICATE
function displayProductImages() {
  var randomNumber = [];
  randomNumber[0] = generateRandomNumber();
  randomNumber[1] = generateRandomNumber();

  while(randomNumber[0] === randomNumber[1]) {
    console.log('Duplicate found');
    randomNumber[1] = generateRandomNumber();
  }
  randomNumber[2] = generateRandomNumber();
  while(randomNumber[2] === randomNumber[1] || randomNumber[2] === randomNumber[0]) {
    console.log('Dupicate found');
    randomNumber[2] === generateRandomNumber();
  }
  ProductImage.leftImage.src = ProductImage.all[randomNumber[0]].source;
  ProductImage.centerImage.src = ProductImage.all[randomNumber[1]].source;
  ProductImage.rightImage.src = ProductImage.all[randomNumber[2]].source;
  ProductImage.leftImage.alt = ProductImage.all[randomNumber[0]].source;
  ProductImage.rightImage.alt = ProductImage.all[randomNumber[1]].source;
  ProductImage.leftImage.alt = ProductImage.all[randomNumber[2]].source;
  ProductImage.all[randomNumber[0]].views += 1;
  ProductImage.all[randomNumber[1]].views += 1;
  ProductImage.all[randomNumber[2]].views += 1;
};

function handleClick(e) {
  console.log(e.target);
  for(var i = 0; i < ProductImage.all.length; i++) {
    if(e.target.alt === ProductImage.all[i].name) {
      ProductImage.all[i].votes += 1;
    }
  }

  displayProductImages();
};

displayProductImages();

//EVENT HANDLER THAT DISPLAYS IMAGES ON CLICK
ProductImage.container.addEventListener('click', handleClick);


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






//console will show name + was clicked when user clicks image ex. bag was clicked
//tally number of clicks
//console.table shows votes and views
//console shows just viewed array and currently showing array
//no duplicates, no 3 images show in a row
//if user does not click on imgage tell him to
//at 25 clicks display votes and views for each item
//turn of event listener - element.removeEventListener


// var selectionNumbers = [];
// var totalClicks = 0;
// var randomNum1 = 0;
// var randomNum2 = 0;
// var randomNum3 = 0;
//
//
// function ProductImage(name, filepath, id) {
//   this.name = name;
//   this.filepath = filepath;
//   this.id = id;
//   this.views = 0;
//   this.votes = 0;
// }
//
//
// // Image Data for each Product Image
// var bag = new ProductImage('bag', 'img/bag.jpg', 'bag');
// var banana = new ProductImage('banana', 'img/banana.jpg', 'banana');
// var bathroom = new ProductImage('bathroom', 'img/bathroom.jpg', 'bathroom');
// var boots = new ProductImage('boots', 'img/boots.jpg', 'boots');
// var breakfast = new ProductImage('breakfast', 'img/breakfast.jpg', 'breakfast');
// var bubblegum = new ProductImage('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
// var chair = new ProductImage('chair', 'img/chair.jpg', 'chair');
// var cthulhu = new ProductImage('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
// var dogduck = new ProductImage('dogduck', 'img/dog-duck.jpg', 'dogduck');
// var dragon = new ProductImage('dragon', 'img/dragon.jpg', 'dragon');
// var pen = new ProductImage('pen', 'img/pen.jpg', 'pen');
// var petsweep = new ProductImage('petsweep', 'img/pet-sweep.jpg', 'petsweep');
// var scissors = new ProductImage('scissors', 'img/scissors.jpg', 'scissors');
// var shark = new ProductImage('shark', 'img/shark.jpg', 'shark');
// var sweep = new ProductImage('sweep', 'img/sweep.jpg', 'sweep');
// var tauntaun = new ProductImage('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
// var unicorn = new ProductImage('unicorn', 'img/unicorn', 'unicorn');
// var usb = new ProductImage('usb', 'img/usb', 'usb');
// var watercan = new ProductImage('watercan', 'img/watercan.jpg', 'watercan');
// var wineglass = new ProductImage('wineglass', 'img/wine-glass.jpg', 'wineglass');
//
// var imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
//
// ProductImage.allNames = [];
// for(var i = 0; i < ProductImage.allNames.length; i++) {
//   new ProductImage(ProductImage.allNames[i]);
// }
//
// //randomly displaying 3 random numbers with no dupiclates
// var displayRandomImage = function() {
//   do {
//     randomNum1 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum1) || randomNum1 === randomNum2 || randomNum1 === randomNum3 || randomNum1 === 20);
//   do {
//     randomNum2 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum2) || randomNum2 === randomNum1 || randomNum2 === randomNum3 || randomNum2 === 20);
//   do {
//     randomNum3 = Math.floor(Math.random() * (imageArray.length + 1));
//   } while (selectionNumbers.includes(randomNum3) || randomNum3 === randomNum1 || randomNum3 === randomNum2 || randomNum3 === 20);
//
//   selectionNumbers[0] = randomNum1;
//   selectionNumbers[1] = randomNum2;
//   selectionNumbers[2] = randomNum3;
//   console.log( 'this is a sectionNumber', selectionNumbers);
// };
//
// displayRandomImage();

// var displayLeft, displayCenter, displayRight;
// var leftImage = document.getElementById('left');
// ProductImage.document.getElementById('center');
// ProductImage.document.getElementById('right');
// ProductImage.document.getElementById('imageSection');

//I need to render images, display using the DOM
// var displayImages = function() {
//   var imgEl = document.getElementById('left');
//   left.setAttribute('filepath', imageArray[0]);
//   imgEl.appendChild('img');
//
//   var center = document.getElementById('center');
//   center.setAttribute('filepath', imageArray[1]);
//
//   var right = document.getElementById('right');
//   right.setAttribute('filepath', imageArray[2]);
// };
//
// displayImages();

// ProductImage.leftImage.src = ProductImage.all[selectionNumbers[0]].filepath;

//bus-mall process
//data: 1. array 2. constructor 3. instances(name, path, clicks, views) 4. DOM 5. total click counter
//function delaration: display 3 unique random images
//executing code: 1.show images 2. set up event listner on container
