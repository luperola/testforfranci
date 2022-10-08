let nota, testDo, testRe, testMi, testFa, testSol, testLa, testSi;
nota = document.getElementById("si").id;
const correctFx = new Audio("correct.mp3");
const wrongFx = new Audio("quack.mp3");
let scoreRight = 0;
let scoreWrong = 0;
let count = 0;
let secondcount = 0;

function notaDo() {
  testDo = 0;
  if (nota === "do") {
    //correctFx.play();
    document.getElementById("do").style.display = "none";
    document.getElementById("sol1").style.display = "block";
    scoreRight++;
    nota = document.getElementById("sol1").id;
    console.log("nota", nota);
    testDo = 1;
    updateScore();
  }
  if (nota === "do1") {
    //correctFx.play();
    document.getElementById("do1").style.display = "none";
    document.getElementById("dl1").style.display = "none";
    document.getElementById("re1").style.display = "block";
    document.getElementById("dl2").style.display = "block";
    scoreRight++;
    nota = document.getElementById("re1").id;
    console.log("nota", nota);
    testDo = 1;
    updateScore();
  }
  if (testDo === 0) {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaRe() {
  testRe = 0;
  if (nota === "re") {
    //correctFx.play();
    document.getElementById("re").style.display = "none";
    document.getElementById("si1").style.display = "block";
    scoreRight++;
    nota = document.getElementById("si1").id;
    console.log("nota", nota);
    testRe = 1;
    updateScore();
  }

  if (nota === "re1") {
    //correctFx.play();
    document.getElementById("re1").style.display = "none";
    document.getElementById("dl2").style.display = "none";
    document.getElementById("fa").style.display = "block";
    scoreRight++;
    nota = document.getElementById("fa").id;
    console.log("nota", nota);
    testRe = 1;
    updateScore();
  }
  if (testRe === 0) {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaMi() {
  if (nota === "mi") {
    //correctFx.play();
    document.getElementById("mi").style.display = "none";
    document.getElementById("do").style.display = "block";
    scoreRight++;
    nota = document.getElementById("do").id;
    console.log("nota", nota);
    updateScore();
  } else {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaFa() {
  if (nota === "fa") {
    //correctFx.play();
    document.getElementById("fa").style.display = "none";
    document.getElementById("la1").style.display = "block";
    scoreRight++;
    nota = document.getElementById("la1").id;
    console.log("nota", nota);
    updateScore();
  } else {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaSol() {
  testSol = 0;
  if (nota === "sol") {
    //correctFx.play();

    document.getElementById("sol").style.display = "none";
    document.getElementById("mi").style.display = "block";
    scoreRight++;
    nota = document.getElementById("mi").id;
    console.log("nota", nota);
    testSol = 1;
    updateScore();
  }

  if (nota === "sol1") {
    //correctFx.play();
    document.getElementById("sol1").style.display = "none";
    document.getElementById("la").style.display = "block";
    scoreRight++;
    nota = document.getElementById("la").id;
    console.log("nota", nota);
    testSol = 1;
    updateScore();
  }
  if (testSol === 0) {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaLa() {
  testLa = 0;
  if (nota === "la") {
    //correctFx.play();
    document.getElementById("la").style.display = "none";
    document.getElementById("re").style.display = "block";
    scoreRight++;
    nota = document.getElementById("re").id;
    console.log("nota", nota);
    testLa = 1;
    updateScore();
  }
  if (nota === "la1") {
    //correctFx.play();
    document.getElementById("la1").style.display = "none";
    scoreRight++;
    nota = "";
    console.log("nota", nota);
    testLa = 1;
    updateScore();
    continua();
  }
  if (testLa === 0) {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}
function notaSi() {
  testSi = 0;
  if (nota === "si") {
    //correctFx.play();
    document.getElementById("si").style.backgroundColor = "red";
    setInterval("", 3000);
    document.getElementById("si").style.display = "none";
    document.getElementById("sol").style.display = "block";
    scoreRight++;
    nota = document.getElementById("sol").id;
    testSi = 1;
    console.log("nota", nota);
    updateScore();
  }
  if (nota === "si1") {
    //correctFx.play();
    document.getElementById("si1").style.display = "none";
    document.getElementById("do1").style.display = "block";
    document.getElementById("dl1").style.display = "block";
    scoreRight++;
    nota = document.getElementById("do1").id;
    console.log("nota", nota);
    testSi = 1;
    updateScore();
  }
  if (testSi === 0) {
    wrongFx.play();
    scoreWrong++;
    updateScore();
  }
}

function updateScore() {
  const wrong = document.querySelector("#score-wrong");
  wrong.innerText = scoreWrong;

  const right = document.querySelector("#score-correct");
  right.innerText = scoreRight;
}
function continua() {
  document.getElementById("OK").style.display = "inline";
  document.getElementById("next").style.display = "inline";
}

function prossimoTest() {
  window.open("index2.html", "_blank").focus();
}
