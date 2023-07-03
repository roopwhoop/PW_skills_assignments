let inName = document.querySelector("#in-name") ;
let btnCheck = document.querySelector("#btn-check") ;
let btnReset = document.querySelector("#btn-reset") ;
let opName = document.querySelector("#op-name") ;
let inNameValue ;
let opNameValue ;

inName.addEventListener("input" , (e)=>{
	inNameValue = e.target.value ;
}) ;

btnCheck.addEventListener("click" , ()=>{
	opNameValue = "" ;
	opName.textContent = opNameValue ;
	for(let i=0; i<inNameValue.length; i++){
		(i==0 || (i>0 && inNameValue[(i-1)] == " ")) ?
			opNameValue = opNameValue + (inNameValue[i].toUpperCase()) 
			:
			opNameValue = opNameValue + inNameValue[i] ;
		
	}
	console.log(opNameValue) ;
	opName.textContent = opNameValue ;
}) ;

btnReset.addEventListener("click" , ()=>{
	inName.value = "" ;
	opName.textContent = "" ;
})