import * as Filter from './filter.js'
import * as Header from './header.js'
import * as Footer from './footer.js'
import * as Plant from './plant.js'

Filter.render();
Header.render();
Footer.render();

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
		<div class="gridComp" id=${data.id}>
			<div class="imgContainer">
				<img src="homeImages/${data.photo}" alt=${data.name}>
			</div>
			<div class="plantName">${data.name}</div>
			<div class="plantDesc">${data.description}</div>
			<div class="plantFeatures">
				${data.features.map(subData => featureComponent(subData)).join('')}
			</div>
		</div>
	`;
}

function gridAll(data){
	return data.map(subData => gridComponent(subData)).join('');
}

fetch('/json/all.json').then(response => response.json()).then(data => gridAll(data)).then(html => {
	document.querySelector('.plantsGrid').innerHTML=html;
	addGridListeners();
})

function addGridListeners(){
	document.querySelectorAll('.gridComp').forEach(item => item.addEventListener("click", (e)=>{plantClicked(item)}));
}

function plantClicked(item){
	Plant.render(item.id);
}


















