let menuButton = document.querySelector('.menu-button');

let modal = document.querySelector('.menu');

menuButton.addEventListener('click', function(){
   modal.classList.add('active');
})

let closeButton = document.querySelector(".btn-close");

closeButton.addEventListener('click', function(){
   modal.classList.remove("active");
})

