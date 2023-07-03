const Decrementbtn = document.getElementById("Decrementbtn");
const Incrementbtn = document.getElementById("Incrementbtn");
const displayValue= document.getElementById("displayValue");
const resetbtn = document.getElementById("resetbtn");

Decrementbtn.addEventListener("click",() =>{
    const value = Number(displayValue.innerText);
    if(value >0) {
        displayValue.innerText = value - 1;
    } else{
        alert("Negative value not allowed");
    }
})
Incrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });
  IncrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });