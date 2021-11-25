/* dia da semana, a data dd/mm/aaaa ás 00:00 -> objetivo*/

// essa function executa no html oq eu precisar
function printInDoc(p, obj){
  p.innerHTML= obj;
}
printInDoc(createP(),`${convertDay()}, ${buildDate()} ás`);

// Essa função cria uma div filha;
function createDiv() {
	const momDiv = document.getElementById('main');
	const childDiv = document.createElement('div');
	childDiv.setAttribute('class', 'children');
  momDiv.appendChild(childDiv);
	return childDiv;
}

// Essa função cria uma tag P que está inserida na DIV filha;
function createP(){
  const div = createDiv();
  const p = document.createElement('p');
	div.appendChild(p);
	return p;
}

//  vai apresentar o nome dos dias;
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