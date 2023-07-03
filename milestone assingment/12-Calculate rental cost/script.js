let select;
let days;
const rentalCosts = {
    economy : 4000,
    midsize : 10000,
    luxury : 20000
}


document.querySelector("#car-type").addEventListener("input", (e)=>{
    select = e.target.value ;
})


document.querySelector("#days").addEventListener("input", (e)=>{
    days = e.target.value;
})


document.querySelector("#btn-submit").addEventListener("click", ()=>{
    document.querySelector("#op-screen").textContent = (rentalCosts[select] * Number(days)) + "₹";
})


document.querySelector("#btn-reset").addEventListener("click" , ()=>{
    document.querySelector("#op-screen").textContent = "" ;
})