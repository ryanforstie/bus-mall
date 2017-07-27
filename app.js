'use strict';

//DATA SECTION

//CONSTUCTOR FUNCTION WITH INSTANCES DATA
function ProductImage(name) {
  this.name = name;
  this.source = 'img/' + name + '.jpg';
  this.views = 0;
  this.votes = 0;
  ProductImage.all.push(this);
}

//TOTAL CLICK COUNTER
ProductImage.totalClicks = 0;

//ARRAY DATA
ProductImage.all = [];
ProductImage.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];

//VARIABLE TO PREVENT DUPLICATES
var previouslyShown = [];


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
  console.log(previouslyShown, 'previously shown');
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
    randomNumber[2] = generateRandomNumber();
  }

  ProductImage.leftImage.src = ProductImage.all[randomNumber[0]].source;
  ProductImage.centerImage.src = ProductImage.all[randomNumber[1]].source;
  ProductImage.rightImage.src = ProductImage.all[randomNumber[2]].source;

  ProductImage.leftImage.alt = ProductImage.all[randomNumber[0]].name;
  ProductImage.centerImage.alt = ProductImage.all[randomNumber[1]].name;
  ProductImage.rightImage.alt = ProductImage.all[randomNumber[2]].name;

  ProductImage.all[randomNumber[0]].views += 1;
  ProductImage.all[randomNumber[1]].views += 1;
  ProductImage.all[randomNumber[2]].views += 1;

  console.log('currently showing');
  previouslyShown = randomNumber;
};

//DISPLAY LIST AFTER 25 CLICKS
function displayList() {
  var ulEl = document.getElementById('productList');

  for(var i = 0; i < ProductImage.all.length; i++) {
    var liEl = document.createElement('li');

    liEl.textContent = ProductImage.all[i].name + ' was viewed ' + ProductImage.all[i].views + ' times and was clicked ' + ProductImage.all[i].votes + ' times';
    ulEl.appendChild(liEl);
  }
}

//FUNCTION HANDLES IF SOMEONE DOES NOT CLICK AN IMAGE, AND TRACKS CLICKS TO 25 AND DISPLAYS CHART
function handleClick(e) {
  ProductImage.totalClicks += 1;

  if (e.target.id === 'imageSection') {
    return alert('Click on an image!');
  }

  for(var i = 0; i < ProductImage.all.length; i++) {
    if(e.target.alt === ProductImage.all[i].name) {
      ProductImage.all[i].votes += 1;
    }
  }
  if(ProductImage.totalClicks === 3) {
    ProductImage.container.removeEventListener('click', handleClick);

    updateChartArrays();
    return drawChart();
    return displayList();
  }
//AFTER EACH CLICK THIS STORES THAT DATA
  localStorage.ProductImage = JSON.stringify(ProductImage.all);

  displayProductImages();
};

//EVENT HANDLER THAT DISPLAYS NEW IMAGES ON CLICK
ProductImage.container.addEventListener('click', handleClick);

//CHART VARIABLES
var barChart;
var chartDrawn = false;
var votes = [];
var labels = [];

var data = {
  labels: labels, // label array we declared earlier
  datasets: [
    {
      data: votes, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'yellow',
        'lime',
        'maroon',
        'orange',
        'navy',
        'olive',
        'black',
        'aqua',
        'lightblue',
        'navy',
        'yellow',
        'lime',
        'maroon',
        'orange',
        'teal',
      ],
      hoverBackgroundColor: [
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue'
      ]
    }]
};

//CHART FUNCTIONS
function updateChartArrays() {
  for (var i = 0; i < ProductImage.all.length; i++) {
    labels[i] = ProductImage.all[i].name;
    votes[i] = ProductImage.all[i].votes;
  }
}

function drawChart() {
  var ctx = document.getElementById('barChart').getContext('2d');
  barChart = new Chart(ctx,{
    type: 'horizontalBar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Your Favorite Product Chart',
        fontSize: 30
      },
      tooltips: {
        titleFontSize: 20,
        footerFontSize: 20
      },
      legend: {
        display: false,
        labels: {
          text: '',
          fontColor: 'rgb(255, 99, 132)'
        },
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

//IF STATEMENT LOADS DATA IF IT EXIST AND IF NOT STARTS FROM SCRATCH AND CREATES INSTANCES
if(localStorage.length) {
  console.log('There is local storage!');
  ProductImage.all = JSON.parse(localStorage.ProductImage);
} else {
  for(var i = 0; i < ProductImage.allNames.length; i++) {
    new ProductImage(ProductImage.allNames[i]);
  }
  console.log('There is no local storage!');
};

displayProductImages();



// function hideChart() {
//   document.getElementById('barChart').hidden = true;
// }

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
