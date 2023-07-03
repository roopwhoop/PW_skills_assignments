const inputtext = document.getElementById("input-text");
const display = document.getElementById("display");

inputtext.addEventListener("keypress", function(e){
    display.innerText = "you have Pressed " +e.key
});

