import * as Filter from './filter.js'
import * as Plant from './plant.js'

// Filter.render();
// Header.render();
// Footer.render();

let html = `
<div class="titleBox">
	<div class="title">
		<div class="titleText">Discover beautiful houseplants to love and learn its care</div>
		<div class="subtitleText">Find plants by they look and learn its care. Plants for beginners, safe plants for pets, air purifier plants and more!</div>
	</div>
</div>
<div class="fiterPanel">
	<button class="filtersBut">Filters</button>
</div>
<div class="chosenFilters">
	
</div>
<div class="plantsGrid"></div>
`

//render();

export function render(){
	document.querySelector('.content').innerHTML=html;
	fetch('/json/all.json').then(response => response.json()).then(data => drawItems(data));
	Filter.render();
}

export function drawItems(response){
	let html = gridAll(response);
	document.querySelector('.plantsGrid').innerHTML=html;
}


function featureComponent(data){
	return `
		<div class="feature">
			<img src="emojis/${data.icon}">
			<div class="featureText">${data.text}</div>
		</div>
	`
}

function gridComponent(data){
	return `
		<a class="gridComp" href=#/plant/${data.id}>
			<div class="imgContainer">
				<img src="homeImages/${data.photo}" alt=${data.name}>
			</div>
			<div class="plantName">${data.name}</div>
			<div class="plantDesc">${data.description}</div>
			<div class="plantFeatures">
				${data.features.map(subData => featureComponent(subData)).join('')}
			</div>
		</a>
	`;
}

function gridAll(data){
	return data.map(subData => gridComponent(subData)).join('');
}

// fetch('/json/all.json').then(response => response.json()).then(data => gridAll(data)).then(html => {
// 	document.querySelector('.plantsGrid').innerHTML=html;
// 	addGridListeners();
// })

// function addGridListeners(){
// 	document.querySelectorAll('.gridComp').forEach(item => item.addEventListener("click", (e)=>{plantClicked(item)}));
// }

// function plantClicked(item){
// 	Plant.render(item.id);
// }
















