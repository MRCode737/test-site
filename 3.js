const h1       = document.getElementById("h1");
const button1  = document.getElementById("button1");
const stage1   = document.getElementById("stage1");
const body     = document.getElementById("body");
const input1   = document.getElementById("input1");
const p        = document.getElementById("p");
button1.addEventListener("click",start);

function start(){
    p.classList.toggle("hidden");
}