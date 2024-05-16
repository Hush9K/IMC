let peso = prompt('Quanto você pesa?');
let altura = prompt('Qual é a sua altura?');
let imc = peso /= altura *= altura;

peso = parseFloat(peso);
altura = parseFloat(altura);
imc = parseFloat(imc);

if (imc <= 16.9) {
	document.write('<h2>Você está muito abaixo do peso</h2>')
} 	else if (imc >=17 && imc <=18.5) {
	document.write('<h2>Você está abaixo do peso</h2>')
} 	else if (imc >=18.6 && imc <=24.9) {
	document.write('<h2>Você está com o peso ideal</h2>')
}	else if (imc >=25 && imc <=29.9) {
	document.write('<h2>Você está acima do peso</h2>')
}	else if (imc >=30 && imc <=34.9) {
	document.write('<h2>Você está com obesidade grau 1</h2>')
}	else if (imc >=35 && imc <=39.9) {
	document.write('<h2>Você está com obesidade grau 2</h2>')
}	else if (imc >= 40) {
	document.write('<h2>Você está com obesidade grau 3</h2>')
}