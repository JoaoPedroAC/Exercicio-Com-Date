/* dia da semana, a data dd/mm/aaaa ás 00:00 -> objetivo*/
// Essa função cria uma div filha e tag p, onde será escrito tudo oq precisamos
function createDiv(obj) {
	const momDiv = document.getElementById('main');
	const childDiv = document.createElement('div');
	childDiv.setAttribute('class', 'children');
	momDiv.appendChild(childDiv);
	const p = document.createElement('p');
	childDiv.appendChild(p);
	return (p.innerHTML = obj);
}
createDiv(`${convertDay()}, ${buildDate()} ás`);

//  vai apresentar o nome do dia
function convertDay() {
	const date = new Date();
	let atualDate = date.getDay();
	const days = [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado'
	];
	return days[atualDate];
}
function convertMonth(){
	const date = new Date();

}
function buildDate(){
	const date = new Date();
    
}