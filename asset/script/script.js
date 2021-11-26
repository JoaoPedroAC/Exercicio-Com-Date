/* dia da semana, a data dd/mm/aaaa ás 00:00 -> objetivo*/
let relogio = watch();
// Essa função cria uma div filha;
function createDiv() {
	const momDiv = document.getElementById('main');
	const childDiv = document.createElement('div');
	childDiv.setAttribute('class', 'children');
	momDiv.appendChild(childDiv);
	return childDiv;
}

// Essa função cria uma tag P que está inserida na DIV filha;
function createP(obj) {
	const div = createDiv();
	const p = document.createElement('p');
	p.classList.add('relogio')
	div.appendChild(p);
	p.innerHTML = obj;
}
createP(`${convertDay()}, ${buildDate()} ás ${relogio}`)
//  vai apresentar o nome dos dias;
function convertDay() {
	const date = new Date();
	const atualDate = date.getDay();
	const days = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado',
	];
	return days[atualDate];
}

function convertMonth() {
	const date = new Date();
	month = [
		'Janeiro',
		'Fvereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	];
	const atualMonth = date.getMonth();
	return month[atualMonth];
}
// vai aplicar zero a esquerda quando os numeros forem menor q 10
function zeroEsquerda(number) {
	let zero = number < 10 ? `0${number}` : number;
	return zero;
}
//  Essa função retorna a data do mesmo dia do acesso
function buildDate() {
	const date = new Date();
	const day = zeroEsquerda(date.getDate());
	const month = convertMonth();
	const year = date.getFullYear();
	return `${day} / ${month} / ${year}`;
}
function watch() {
	const time = new Date();
	const hours = zeroEsquerda(time.getHours());
	const minutes = zeroEsquerda(time.getMinutes());
	const seconds = zeroEsquerda(time.getSeconds());
	let relogio = `${hours} : ${minutes} : ${seconds}`;
	return relogio;
}
setInterval(function () {
	relogio = watch();
	const pClass = document.querySelector('.relogio');
	pClass.innerHTML = `${convertDay()}, ${buildDate()} ás ${relogio}`;
}, 1000);
