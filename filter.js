import * as Home from './home.js'

export function render() {
	fetch('filter.html').then(resp=>resp.text()).then(html=>{
		document.querySelector('.popup').innerHTML=html;
		document.querySelector('.flMain').innerHTML = filterAll(filtersData);
		addListeners();

	});
}

function smallFilterComponent(data){
	return `
		<button class="flTile ${data.extraclasses}" data-value="${data.text}">
			<div class="flEmoji">
				<img class="flPhoto" src="emojis/${data.icon}">
			</div>
			<div class="flText">
				${data.text}
			</div>
		</button>
	`;
}


function filterComponent(data){
	return `
		<div class="comp">
			<div class="filterTitle">
				${data.title}
			</div>
			<div class="flUnderline"></div>
			<div class="filterComp" data-title="${data.title}">
				${data.features.map(subData => smallFilterComponent(subData)).join('')}
			</div>
		</div>
	`
}

function filterAll(data) {
	return data.map(subData => filterComponent(subData)).join('')
}

let filtersData = [
		{	
			title: 'Popularity',
			features:
			[
				{
					icon: 'fire.svg',
					text: 'trendy plants'
				},
				{
					icon: 'medal.svg',
					text: 'popular plants'
				},
				{
					icon: 'leaf-monstera.svg',
					text: 'rare plants'
				}
			]
		},
		{	
			title: 'Features',
			features:
			[
				{
					icon: 'smile.svg',
					text: 'easy to take care'
				},
				{					
					icon: 'cat-face.svg',
					text: 'safe for cats'
				},
				{
					icon: 'dog-face.svg',
					text: 'safe for dogs'
				},
				{
					icon: 'flower.svg',
					text: 'with flowers'
				},
				{
					icon: 'hanging-plant.svg',
					text: 'hanging plants'
				}
			]
		},
		{	
			title: 'Light Exposure',
			features:
			[
				{
					icon: 'sun-with-cloud.svg',
					text: 'thrive in low light'
				},
				{
					icon: 'sun.svg',
					text: 'need bright light'
				}
			]
		},
		{	
			title: 'Leaf size',
			features:
			[
				{
					extraclasses: 'mini_tile',
					icon: 'leaf.svg',
					text: 'small'
				},
				{
					extraclasses: 'medium_tile',
					icon: 'leaf.svg',
					text: 'medium'
				},
				{
					extraclasses: 'big_tile',
					icon: 'leaf.svg',
					text: 'big'
				}
			]
		},
		{	
			title: 'Leaf color',
			features:
			[
				{
					extraclasses: 'num_tile',
					icon: '',
					text: '1'
				},
				{
					extraclasses: 'num_tile',
					icon: '',
					text: '2+'
				}
			]
		},
		{	
			title: 'Mature plant height',
			features:
			[
				{
					extraclasses: 'mini_tile',
					icon: 'plant-tall.svg',
					text: 'mini'
				},
				{
					extraclasses: 'small_tile',
					icon: 'plant-tall.svg',
					text: 'small'
				},
				{
					extraclasses: 'medium_tile',
					icon: 'plant-tall.svg',
					text: 'medium'
				},
				{
					extraclasses: 'big_tile',
					icon: 'plant-tall.svg',
					text: 'tall'
				}
			]
		},
		{	
			title: 'Recommended Space',
			features:
			[
				{
					icon: 'shower.svg',
					text: 'bathroom'
				},
				{
					icon: 'bed.svg',
					text: 'bedroom'
				},
				{
					icon: 'work-desk.svg',
					text: 'office'
				},
				{
					icon: 'terrarium.svg',
					text: 'terrarium'
				}
			]
		}
	];

function tileClicked(item){
	item.classList.toggle('active')
	sendRequest();
}

function sendRequest(){
	let toSend = [...document.querySelectorAll('.filterComp')].map(filterComp => {
		return {
			name: filterComp.dataset.title,
			values: [...filterComp.querySelectorAll('.flTile.active')].map(tile => {
				return tile.dataset.value
			})
		}
	})

	let num = Math.floor(Math.random() * 5) + 1
	////////////////////////////////
	/////// რეალური back არ მიწერია და ვაბრუნებ რანდომ json ფაილებს,
	/////// თუმცა პირველი fetch-ით ვაგზავნი ფილტრის შედეგებს და 
	/////// ნამდვილი ბექის შემთხვევაში ის მიხედავდა საქმეს.
	fetch(`/json/filterResults/result${num}.json`, {
	  method: 'post',
	  body: JSON.stringify(toSend)
	});

	/////// ეს fetch ხატავს შედეგებს (რადგან back არ მიწერია)
	fetch(`/json/filterResults/result${num}.json`).then(response => response.json()).then(data => Home.drawItems(data));

	console.log(toSend);
}

function addListeners(){
		document.querySelectorAll('.flTile').forEach(item => item.addEventListener("click", (e)=>{tileClicked(item)}));
		document.querySelector('.flCloseOnClick').addEventListener("click", closeFilter);
		document.querySelector('.flResultBut').addEventListener("click", closeFilter);
		document.querySelector('.filtersBut').addEventListener("click", openFilter);
}

export function closeFilter(){
	document.querySelector('.popup').style.display = "none";
}

function openFilter(){
	document.querySelector('.popup').style.display = "block";
}
