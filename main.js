let turn = "x";
let title = document.querySelector("h3");
let sqare = [];
function reeload() {
  setInterval(function () {
    title.innerHTML += "."
  },600);
  setTimeout(function () {
    location.reload()
  },2100);
}
function btnReload(){
setTimeout(function () {
    location.reload()
  },100);
}


function winner() {
for(let i =1; i<=9; i++ ){
  sqare[i] = document.getElementById("item" + i).innerHTML;
}
if (sqare[1] == sqare[2] && sqare[2] == sqare[3] && sqare[1] != "") {
title.innerHTML = `${sqare[1]} winner`;
document.getElementById("item"+1).style.background = "#3f51b5";
document.getElementById("item"+1).style.color = "#fff";
document.getElementById("item"+2).style.background = "#3f51b5";
document.getElementById("item"+2).style.color = "#fff";
document.getElementById("item"+3).style.background = "#3f51b5";
document.getElementById("item"+3).style.color = "#fff";
reeload();
}
else if (sqare[4] == sqare[5] && sqare[5] == sqare[6] && sqare[5] != "") {
  title.innerHTML = `${sqare[4]} winner`;
  document.getElementById("item"+4).style.background = "#3f51b5";
  document.getElementById("item"+4).style.color = "#fff";
  document.getElementById("item"+5).style.background = "#3f51b5";
  document.getElementById("item"+5).style.color = "#fff";
  document.getElementById("item"+6).style.background = "#3f51b5";
  document.getElementById("item"+6).style.color = "#fff";
  reeload();
}
else if (sqare[7] == sqare[8] && sqare[8] == sqare[9] && sqare[7] != "") {
  title.innerHTML = `${sqare[7]} winner`;
  document.getElementById("item"+7).style.background = "#3f51b5";
  document.getElementById("item"+7).style.color = "#fff";
  document.getElementById("item"+8).style.background = "#3f51b5";
  document.getElementById("item"+8).style.color = "#fff";
  document.getElementById("item"+9).style.background = "#3f51b5";
  document.getElementById("item"+9).style.color = "#fff";
  reeload();
}


else if (sqare[1] == sqare[4] && sqare[4] == sqare[7] && sqare[4] != "") {
  title.innerHTML = `${sqare[1]} winner`;
  document.getElementById("item"+1).style.background = "#3f51b5";
  document.getElementById("item"+1).style.color = "#fff";
  document.getElementById("item"+4).style.background = "#3f51b5";
  document.getElementById("item"+4).style.color = "#fff";
  document.getElementById("item"+7).style.background = "#3f51b5";
  document.getElementById("item"+7).style.color = "#fff";
  reeload();
}
else if (sqare[2] == sqare[5] && sqare[5] == sqare[8] && sqare[5] != "") {
  title.innerHTML = `${sqare[2]} winner`;
  document.getElementById("item"+2).style.background = "#3f51b5";
  document.getElementById("item"+2).style.color = "#fff";
  document.getElementById("item"+5).style.background = "#3f51b5";
  document.getElementById("item"+5).style.color = "#fff";
  document.getElementById("item"+8).style.background = "#3f51b5";
  document.getElementById("item"+8).style.color = "#fff";
  reeload();
}
else if (sqare[3] == sqare[6] && sqare[6] == sqare[9] && sqare[3] != "") {
  title.innerHTML = `${sqare[3]} winner`;
  document.getElementById("item"+3).style.background = "#3f51b5";
  document.getElementById("item"+3).style.color = "#fff";
  document.getElementById("item"+6).style.background = "#3f51b5";
  document.getElementById("item"+6).style.color = "#fff";
  document.getElementById("item"+9).style.background = "#3f51b5";
  document.getElementById("item"+9).style.color = "#fff";
  reeload();
}


else if (sqare[3] == sqare[5] && sqare[5] == sqare[7] && sqare[5] != "") {
  title.innerHTML = `${sqare[3]} winner`;
  document.getElementById("item"+3).style.background = "#3f51b5";
  document.getElementById("item"+3).style.color = "#fff";
  document.getElementById("item"+5).style.background = "#3f51b5";
  document.getElementById("item"+5).style.color = "#fff";
  document.getElementById("item"+7).style.background = "#3f51b5";
  document.getElementById("item"+7).style.color = "#fff";
  reeload();
}
else if (sqare[1] == sqare[5] && sqare[5] == sqare[9] && sqare[5] != "") {
  title.innerHTML = `${sqare[1]} winner`;
  document.getElementById("item"+1).style.background = "#3f51b5";
  document.getElementById("item"+1).style.color = "#fff";
  document.getElementById("item"+5).style.background = "#3f51b5";
  document.getElementById("item"+5).style.color = "#fff";
  document.getElementById("item"+9).style.background = "#3f51b5";
  document.getElementById("item"+9).style.color = "#fff";
  reeload();
}
}

function game(id) {
  let element = document.getElementById(id);

  // تحقق مما إذا كان هناك فائز بالفعل
  if (!title.innerHTML.includes("winner")) {
    element.classList.add("active");

    if (turn === "x" && element.innerHTML == "") {
      element.innerHTML = "X";
      turn = "o";
      title.innerHTML = "O";
    } else if (turn === "o" && element.innerHTML == "") {
      element.innerHTML = "O";
      turn = "x";
      title.innerHTML = "X";
    }
    winner();
  }
}


////j
document.oncontextmenu = function() {
return false;
};
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  I .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  J .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.keyCode ==  U .charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode ==  C .charCodeAt(0)) {
return false;
}

}
