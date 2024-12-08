
let score = 0;
//document.querySelector(button).addEventListener("click",movePage);
var grid = document.getElementById('grid')
const num = document.getElementById("number")
let colors = ['#FF00FF', '	#87CEFA', '#00FF00', '#FFFF00', '#5F9EA0', '#00FFFF', '#FFD700', '#ffeb3b', '#2196f3',
  '#f50057', '#3f51b5', '#ff9800', '#009688', '#cddc39', '#9c27b0', '#FF0000']
function movePage() {
  //localStorage.setItem("name",document.querySelector("input").value)
  window.location.href = "../html/game.html"
}

//
var grid = document.getElementById('grid')
function gameBoard() {
  let arr = [];
  let arr1 = [];
  let x = 100;
  for (let index = 0; index < 100; index++) {
    arr[index] = index + 1;
  }

  for (let index = 0; index < 100; index++) {
    let randomNumber = Math.floor(Math.random() * x);
    let selectedNumber = arr[randomNumber];
    arr1[index] = selectedNumber;
    arr.splice(randomNumber, 1);
    x--;
    let randomColor = Math.floor(Math.random() * colors.length);
    var board = document.createElement("div");
    board.id = "Number" + selectedNumber;
    board.innerHTML = "" + selectedNumber;
    grid.appendChild(board);
    document.getElementById("Number" + selectedNumber).style.color = colors[randomColor];
    document.getElementById("Number" + selectedNumber).style.height = "60px";
    document.getElementById("Number" + selectedNumber).style.width = "80px";
    document.getElementById("Number" + selectedNumber).style.textAlign = "center";
    document.getElementById("Number" + selectedNumber).style.fontSize = "40px";
    document.getElementById("Number" + selectedNumber).style.display = "flex";
    board.addEventListener('click', () => check(selectedNumber, "Number" + selectedNumber))
  }


}

let numbers = [];
function numFunc() {
  let arr1 = [];
  let x = 100;
  for (let index = 0; index < 100; index++) {
    numbers[index] = index + 1;
  }

  for (let index = 0; index < 100; index++) {
    let randomNumber = Math.floor(Math.random() * x);
    let selectedNumber = numbers[randomNumber];
    arr1[index] = selectedNumber;
    numbers.splice(randomNumber, 1);
    x--;
  }
  return arr1;
}

let x =[];
  x= numFunc();
function seerchNumber() {
  // let arr = []
  // for (let index = 0; index < 100; index++) {
  //   arr[index] = index + 1;
  // }
  // let x = Math.floor(Math.random() * arr.length - 1);
  let randomColor = Math.floor(Math.random() * colors.length);
  document.getElementById("number").innerHTML = x[0];
  x = x.slice(1);
  document.getElementById("number").style.color = colors[randomColor];
  document.getElementById("number").style.fontSize ="100px";
  //arr.splice(arr[x], 1);
  if (score == 100) {
    window.location.href="./win.html"
  }
}

function timer(time) {
  const element = document.getElementById("stuper");
  let x = time
  timer1 = setInterval(function () {
    if (x >= 0){
      element.innerHTML = x--;
    }
    if (x < 0){
        addToArr()
      movePage2();
    }
      element.setAttribute("class","democlass" ); 
      document.getElementById("stuper").setAttribute("class", "stuperColor"); 
  }, 1000);

}
window.onload = function () {
  gameBoard()
  timer(localStorage.getItem("time"));
  seerchNumber();
}
function save(duration) {
  localStorage.setItem('time', duration);
  window.location.href = 'game.html';
}

function check(selectedNumber, id) {
  if (selectedNumber == num.innerHTML) {
    score++;
    document.getElementById("score").innerHTML = score;
    clearInterval(timer1);
    timer((localStorage.getItem("time")));
    seerchNumber();
  
    document.getElementById(id).innerText = "😊";
    localStorage.setItem('score', score);
  }

}

function getScore(params) {
  document.querySelector("#point").innerHTML = localStorage.getItem("score");
}
function movePage2() {
  window.location.href = "../html/gameOver.html";
}

let scores =JSON.parse( localStorage.getItem("scores") )||[]
if(!scores){
localStorage.setItem("scores",[0]);
 scores =JSON.parse( localStorage.getItem("scores") )
}

function addToArr() {
 scores.push(score);
 localStorage.setItem("scores",JSON.stringify(scores))
}



