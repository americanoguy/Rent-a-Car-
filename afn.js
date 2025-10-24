AOS.init();

const age = confirm("Are you 18 or older?")


if(age){
    const audio = new Audio("audio/car-engine-roaring-376881.mp3");
    audio.play()
}else{
    window.open("https://www.google.com/");
}



function showHiddenMenu() {
    const links = document.getElementById('links');
    if(links.classList.contains("show")){
        links.classList.remove("show")
    }else{
        links.classList.add("show")
    }
}

const products = document.querySelectorAll('.products');
const left = document.querySelector('.leftarrov');
const right = document.querySelector('.rightarrov');

let i = 0;

for (let j = 0; j < products.length; j++) {
  if (j === 0) {
    products[j].style.display = 'block';
  } else {
    products[j].style.display = 'none';
  }
}

right.onclick = () => {
  products[i].style.display = 'none';
  i++;
  if (i >= products.length) {
    i = 0;
  }
  products[i].style.display = 'block';
}

left.onclick = () => {
  products[i].style.display = 'none';
  i--;
  if (i < 0) {
    i = products.length - 1;
  }
  products[i].style.display = 'block';
}
