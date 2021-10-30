

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

setInterval(piscaOn, 1000);


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




//                 MENU ANIMADO
var menuAnime = document.querySelector("#menuAnime");
menuAnime.addEventListener("click", showMenu, false);
 
var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
} 

