

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


console.log(icons)

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
	const iconSelect = formSelect.value;
	console.log(iconSelect);
	cardsAnimal.innerHTML = '';
	if (iconSelect === 'All'){
		icons.forEach(cardGenerator);
	}else if (iconSelect === 'Animal') {
		let animals = icons.filter((element) => element.type === 'animal');
		animals.forEach(cardGenerator);
	}else if (iconSelect === 'Vegetable') {
		let vegetables = icons.filter((element) => element.type === 'vegetable');
		vegetables.forEach(cardGenerator);
	}else if (iconSelect === 'User'){
		let user = icons.filter((element) => element.type === 'user');
		user.forEach(cardGenerator);
	}

	console.log(iconSelect)
};

formSelect.addEventListener('change', typeSelect);
