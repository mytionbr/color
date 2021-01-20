const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
let hexadecimal = "#"

btn.addEventListener('click', function(){
	let number = createHexaNumberRandom()
	document.body.style.backgroundColor = number
	color.textContent = number
	cleanHexaNumber()
})
function randomNumber(){
	return Math.ceil(((Math.random()*colors.length)-1))
}
function createHexaNumberRandom(){
	for (let i = 0; i < 6; i++) {
		hexadecimal += colors[randomNumber()]
	}
	return hexadecimal
}
function cleanHexaNumber(){
	hexadecimal = "#"
}