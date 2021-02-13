export function render(jsonToRender){
 fetch(`/json/${jsonToRender}.json`).then(response => response.json()).then(data => {
    fetch('plant.html').then(resp=>resp.text()).then(html=>{
      document.querySelector('.content').innerHTML=html;
      setText(data);
      document.querySelector('.plCards').innerHTML=cardsAll(data.features);
      document.querySelector('.plDesc').innerHTML=plantDescription(data.description, "");
      document.querySelector('.plGallery').innerHTML=plantGallery(data.photos);
      document.querySelector('.plCareInfo').innerHTML=careCardAll(data.care);
    });
  })
}

function setText(data){
  document.querySelector('.plTitle').innerHTML=data.name;
  document.querySelector('.plSubtitle').innerHTML=data.otherNames;
}

function plantDescription(text, extraClass) {
  return text.split('\n').map(paragraph => 
      `
      <p class="paragraph ${extraClass}">${paragraph}</p>
      `
    ).join('');
}

function plantGallery(images){
  return images.map(img => 
      `
      <img src=${img}>
      `
    ).join('');
}

function plantCardComp(data){
  return `
    <div class="plTile">
      <div class="plEmoji">
        <img src="emojis/${data.icon}">
      </div>
      <div class="plCardInfo">
        <div class="plCardTitle">${data.name}</div>
        <div class="plCardText">${data.text}</div>
      </div>
    </div>
  `
}

function cardsAll(data){
  return data.map(subData => plantCardComp(subData)).join('');
}

function careCard(data) {
  return `
    <div class="plCareCard plTile">
      <div class="plTop">
        <img src="emojis/${data.icon}">
        <div class="plTopTitle">${data.title}</div>
      </div>
      <div class="plMain">
        ${plantDescription(data.text, "plCareText")}
      </div>
    </div>
  `
}

function careCardAll(data){
  return data.map(subData => careCard(subData)).join('');
}




// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
