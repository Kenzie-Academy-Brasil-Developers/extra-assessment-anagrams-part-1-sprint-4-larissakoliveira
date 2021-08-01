const p = document.createElement('p')
const resetButton = document.getElementById("reset");

const button = document.getElementById("findButton");
button.addEventListener("click", function () {
	let typedText = document.getElementById("input").value;
	getAnagramsOf(typedText);
    resetButton()
})

function getAnagramsOf(word) {
    p.textContent = resultado(word)
    return document.body.appendChild(p)
}

function resultado(word) {
	let userWord = alphabetize(word) //'aort'
	let arr = []

	for (let i = 0; i < palavras.length; i++){
		let dicioOrdenado = alphabetize(palavras[i])
        if(dicioOrdenado.length === userWord.length && dicioOrdenado.includes(userWord)){
            arr.push(palavras[i])
		}
	}
    let resultado = arr.toString().split(',').join('  ')
    return resultado
}

function alphabetize(a) {
	return a.toLowerCase().split("").sort().join("").trim();
}

resetButton.addEventListener("click", function (){
    p.textContent = ''
})

