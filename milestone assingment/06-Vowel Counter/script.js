let inName = document.querySelector("#in-name") ;
let btnCount = document.querySelector("#btn-count") ;
let btnReset = document.querySelector("#btn-reset") ;
let opName = document.querySelector("#op-name") ;
let inNameValue ;
let opNameCount ;


inName.addEventListener("input" , (e)=>{
	inNameValue = e.target.value ;
	inNameValue = inNameValue.toLowerCase() ;
}) ;


btnCount.addEventListener("click" , ()=>{
	opNameCount = 0 ;
	opName.textContent = opNameCount ;
	for(let i=0; i<inNameValue.length; i++){
		if(inNameValue[i] == "a" || inNameValue[i] == "e" || inNameValue[i] == "i" || inNameValue[i] == "o" || inNameValue[i] == "u"){
			opNameCount++ ;
		}
	}
	console.log("Vowel count is ",opNameCount) ;
	opName.textContent = opNameCount ;
}) ;

btnReset.addEventListener("click" , ()=>{
	inName.value = "" ;
	opName.textContent = "" ;
})