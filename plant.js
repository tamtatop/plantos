export function render(jsonToRender){
 fetch(`/json/${jsonToRender}.json`).then(response => response.json()).then(data => {
    fetch('plant.html').then(resp=>resp.text()).then(html=>{
      document.querySelector('.content').innerHTML=html;
      setText(data);
      document.querySelector('.plCards').innerHTML=cardsAll(data.features);
       document.querySelector('.plDesc').innerHTML=plantDescription(data.description);
       document.querySelector('.plGallery').innerHTML=plantGallery(data.photos);
    });
  })
}

function setText(data){
  document.querySelector('.plTitle').innerHTML=data.name;
  document.querySelector('.plSubtitle').innerHTML=data.otherNames;
}

function plantDescription(text) {
  return text.split('\n').map(paragraph => 
      `
      <p>${paragraph}</p>
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
