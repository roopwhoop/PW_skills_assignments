let container = document.getElementById("container");
let display = document.getElementsById("display");

//keydown
document.addEventListener("keydown", function(e){
    display.style.color = "red";
    display.innerText = e.key + " is keyDown";
});

//keyup
document.addEventListener("keyup", function (e) {
    display.style.color = "green";
    display.innerText = e.key + " is keyUp";
  });