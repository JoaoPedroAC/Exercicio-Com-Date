/* dia da semana, a data dd/mm/aaaa ás 00:00 -> objetivo*/
// essa function executa no html oq eu precisar e atualiza
function printInDoc() {
	setInterval(function () {
		watch();
		const p = document.querySelector('.relogio');
		// const p = document.getElementsByTagName('p')[0];
		p.innerHTML = `${convertDay()}, ${buildDate()} ás ${watch()}`;
	}, 1000);
}
printInDoc();

// Essa função cria uma div filha;
function createDiv(p) {
	const momDiv = document.getElementById('main');
	const childDiv = document.createElement('div');
	childDiv.setAttribute('class', 'children');
	momDiv.appendChild(childDiv);
	childDiv.appendChild(p);
}
createDiv(createP());

// Essa função cria uma tag P que está inserida na DIV filha;
function createP() {
	const p = document.createElement('p');
	p.classList.add('relogio');
	return p;
}
// vai converter os numeros que correspondem aos dias da semana em nome dos próprios
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
// vai converter os numeros que correspondem aos meses em nome dos próprios
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
// Essa function retorna o relógio
function watch() {
	const time = new Date();
	const hours = zeroEsquerda(time.getHours());
	const minutes = zeroEsquerda(time.getMinutes());
	const seconds = zeroEsquerda(time.getSeconds());
	let timer = `${hours} : ${minutes} : ${seconds}`;
	return timer;
}