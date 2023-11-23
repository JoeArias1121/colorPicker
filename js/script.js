let body = document.querySelector("body");
let clicker = document.querySelector("#clicker");
let offsetTop = clicker.offsetTop;
let r1;
let r2;
let r3;

function randomizer() {
    r1 = Math.floor(Math.random() * (101));
    r2 = Math.floor(Math.random() * (101));
    r3 = Math.floor(Math.random() * (101));
}
function changeColor() {
    randomizer()
    body.style.backgroundColor = "rgb"+"("+r1+"%"+","+r2+"%"+","+r3+"%"+")";
    console.log(offsetTop);
}