

//Array di oggetti
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const cardsAnimal = document.getElementById('icons-box');
const formSelect = document.getElementById('icons');

//FUNCTIONS

//Funzione che crea le card
function cardGenerator(element) {
	//Crea elementi html
	let newCol = document.createElement('div');
	newCol.setAttribute('class', 'col');
	let iconCard = document.createElement('div');
	iconCard.setAttribute('class', 'cardAnimal');
	let newDiv = document.createElement('div');
	//Visualizza il nome dell'icona
	newDiv.innerHTML = `<i class="fa-solid fa-${element.name}"></i>`;
	//Visualzza il colore dell'icona
	newDiv.style.color = `${element.color}`;
	iconCard.append(newDiv);
	iconCard.innerHTML +=`<p>${element.name}</p>`;

	newCol.append(iconCard)
	cardsAnimal.append(newCol);
	
}
icons.forEach(cardGenerator);

// Funzione per effettuare l'utilizzo del form
function typeSelect() {
	const iconSelect = document.getElementById('icons').value;
	cardsAnimal.innerHTML = '';
	if (iconSelect === 'All'){
		icons.forEach(cardsAnimal);
	}else if (iconSelect === 'Animal') {
		icons.filter((element) => {
			return element.type === 'animal'
		}).forEach(cardsAnimal);
	}else if (iconSelect === 'Vegetable') {
		iconSelect.filter((element) => {
			return element.type === 'vegetable'
		}).forEach(cardsAnimal);
	}else if (iconSelect === 'User'){
		icons.filter((element) => {
			return element.type === 'user'
		}).forEach(cardsAnimal);
	};
};
console.log(iconSelect)
formSelect.addEventListener('choice', typeSelect);
