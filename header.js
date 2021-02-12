export function render(){
	fetch('./header.html').then(resp => resp.text()).then(html => {
		document.querySelector('.header').innerHTML=html;
		addMenuListeners();
	})
}

function addMenuListeners() {
	document.querySelector('.burgerBut').addEventListener("click", showPurgerPopup);
	document.querySelector('.bgCloseBut').addEventListener("click", hidePurgerPopup);
}

function showPurgerPopup() {
	document.querySelector('.burgerPopup').style.display = "flex";
}

function hidePurgerPopup() {
	document.querySelector('.burgerPopup').style.display = "none";
}