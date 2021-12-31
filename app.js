const BITSIZE = 8;

let display = document.getElementById("display");
let decimal = parseInt(display.textContent);
// "10" >>> 10
10 >>> 1010
let binary = decimal.toString(2);
binary = "0".repeat(BITSIZE - binary.length) + binary;

// Getting the string as a parameter
// and typecasting it into an integer
let splitDigits = (num) => Number(num);
let binaryArray = Array.from(String(binary), splitDigits);

let buttons = document
  .querySelector(".container")
  .addEventListener("click", switchZeroOnes, false);

function switchZeroOnes(e) {
  if (e.target !== e.currentTarget) {
    if (e.target.textContent != "0") {
      e.target.textContent = "0";
      //update the array
      binaryArray[e.target.id] = 0; 
    } else if (e.target.textContent == "0") {
      e.target.textContent = "1";
      //update the array
      binaryArray[e.target.id] = 1;
    }
    getDecimal();
    compareInputDecimal();
  }
  e.stopPropagation();
}

let add = document
  .getElementById("add")
  .addEventListener("click", incrementDecimal, false);
let minus = document
  .getElementById("minus")
  .addEventListener("click", decrementDecimal, false);
let gameVal = document.getElementById("gameVal");
let result = document.getElementById("result");
let representNumber = document.getElementById("guess-number");

//update UI
function updateUI() {
  for (var i = 0; i < BITSIZE; i++) {
    var btnId = i.toString();
    var button = document.getElementById(btnId);
    button.innerText = binaryArray[i];
  }
}

//increment decimal in the display
function incrementDecimal() {
  if (display.textContent < 2 ** (BITSIZE - 1)) {
    display.textContent++;
    decimal = parseInt(display.textContent);
    binary = decimal.toString(2);
    binary = "0".repeat(BITSIZE - binary.length) + binary;
    for (var i = 0; i < BITSIZE; i++) {
      binaryArray[i] = parseInt(binary[i]);
    }
    updateUI();
  }
}

//decrement decimal in the display
function decrementDecimal() {
  if (display.textContent > 0) {
    display.textContent--;
    decimal = parseInt(display.textContent);
    binary = decimal.toString(2);
    binary = "0".repeat(BITSIZE - binary.length) + binary;
    for (var i = 0; i < BITSIZE; i++) {
      binaryArray[i] = parseInt(binary[i]);
    }
    updateUI();
  }
}

//calculate the binary based on the displayed decimal
function getBinary() {
  //get decimal first
  display.textContent = decimal;
  //convert the decimal to binary
  binary = decimal.toString(2);
}

//calculate decimal based on the updated array
function getDecimal() {
  //get binary first
  binary = binaryArray.join("");
  //convert the binary to decimal
  decimal = parseInt(binary, 2);
  display.textContent = decimal;
}

//switch on/off the indices above buttons/bulbs
function toggleLabels() {
  let digits = document.getElementById("digits");
  digits.classList.toggle("toggleBtnOnOff");
  let switcher = document.getElementById("indices");
  if (switcher.textContent == "ON") {
    switcher.textContent = "OFF";
    switcher.style.backgroundColor = "#e74c3c";
  } else {
    switcher.textContent = "ON";
    switcher.style.backgroundColor = "#26c281";
  }
}

//get input as part of the Game Mode
function getInfo() {
  let nameField = document.getElementById("nameField").value;
  gameVal = parseInt(nameField);
  document.getElementById("gameVal").innerHTML = gameVal;
  representNumber.style.display = "block";
  result.style.visibility = "hidden";
  inputPopUp.style.display = "none";
  document.getElementById("nameField").value = "";
}

//compare the input with the decimal and show "You win!" in case they match
function compareInputDecimal() {
  if (display.textContent == gameVal) {
    result.style.visibility = "visible";
  } else {
    result.style.visibility = "hidden";
  }
}

// Game Mode pop-up JS starts here //

// Get the modal
var inputPopUp = document.getElementById("inputPopUp");

// Get the button that opens the modal
var switchGameMode = document.getElementById("switchGameMode");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
switchGameMode.onclick = function () {
  inputPopUp.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  inputPopUp.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == inputPopUp) {
    inputPopUp.style.display = "none";
  }
};

// Game Mode pop-up JS ends here //
