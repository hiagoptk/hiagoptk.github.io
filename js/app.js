
// FUNÇÃO QUE FAZ COM QUE O WELCOME DO SITE APAREÇA
// COMO SE ESTIVE SENDO DIGITADO...

function typeWriter(elemento) {
    const textoArr = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArr.forEach((letra, i) => {
        setTimeout(() => {elemento.innerHTML += letra}, 75 * i)
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}


const titulo = document.querySelector('.typed');
typeWriter(titulo);

//FUNÇÃO DE ANIMAÇÃO DOS FADE-INS DOS ELEMENTOS DA 
//PÁGINA ...

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