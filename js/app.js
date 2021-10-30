let cont = 0;

function piscaOn() {
   if(cont < 1) {
      document.getElementById("terminal").style.visibility = "hidden";
      cont++;
   } else {
      piscaOff();
   }
}

function piscaOff() {
   cont = 0;
   document.getElementById("terminal").style.visibility = "visible"
}

setInterval(piscaOn, 500);


//             ANIMAÇÕES NA PÁGINA

const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animated';

const animeScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach((item) => {
        if (windowTop > item.offsetTop){
            item.classList.add(animationClass);
        } else {
            item.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener('scroll', () => { animeScroll() });