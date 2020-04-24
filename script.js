let time = 2000;
let currentIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length

function nextImg() {
  images[currentIndex].classList.remove('selected');

  currentIndex++;

  if (currentIndex >= max ) {
    currentIndex = 0;
  }
  
  images[currentIndex].classList.add('selected');
}


function start() {
  console.log('window loaded!');
  setInterval(() => {
    // troca de imagens
    nextImg();
  }, time);
}

window.addEventListener("load", start);
