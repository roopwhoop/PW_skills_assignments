const decrementbtn = document.getElementById("decrementbtn");
const DisplayValue = document.getElementById("DisplayValue");
const incrementbtn = document.getElementById("incrementbtn");
const  resetbtn= document.getElementById("resetbtn");

decrementbtn.addEventListener("click", () =>{
const value= Number (DisplayValue.innerText);
if (value > 0){
    DisplayValue.innerText=value-1;
} else{
    alert("Negative value not allowed");
}
});
incrementbtn.addEventListener("click", () =>{
    const value= Number (DisplayValue.innerText);
    if (value >= 10){
        alert("10+ values are not allowed");
    } else{
        DisplayValue.innerText = value +1;
    }
    });
    resetbtn.addEventListener("click", () => {
        DisplayValue.innerText = 0;
      });


