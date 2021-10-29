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

const scrollOffset = 100;

const scrollElement = document.querySelector(".js-scroll");
console.log("ola");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('.scrolled');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('.scrolled');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
/*
const target = document.querySelectorAll('[data-animated]');
const animationClass = 'animated';

const animeScroll = () => {
   const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
   
   target.forEach((item) => {
      if (windowTop > item.offsetTop) {
         item.classList.add("animationClass");
      } else {
         item.classList.remove("animationClass")
      }
   })
}

animeScroll();

window.addEventListener('scroll', () => { animeScroll() }); */