const slides = document.querySelectorAll('.carousel-slide');
const pontos = document.querySelectorAll('.carousel-dot');
const botaoAnterior = document.querySelector('.carousel-control.prev');
const botaoProximo = document.querySelector('.carousel-control.next');
let slideAtual = 0;
let intervaloSlide = null;

function mostrarSlide(indice) {
  slides[slideAtual].classList.remove('active');
  pontos[slideAtual].classList.remove('active');

  slideAtual = (indice + slides.length) % slides.length;

  slides[slideAtual].classList.add('active');
  pontos[slideAtual].classList.add('active');
}

function proximoSlide() {
  mostrarSlide(slideAtual + 1);
}

function slideAnterior() {
  mostrarSlide(slideAtual - 1);
}

function iniciarCarrossel() {
  intervaloSlide = setInterval(proximoSlide, 5000);
}

function pararCarrossel() {
  clearInterval(intervaloSlide);
}

botaoProximo.addEventListener('click', () => {
  proximoSlide();
  pararCarrossel();
  iniciarCarrossel();
});

botaoAnterior.addEventListener('click', () => {
  slideAnterior();
  pararCarrossel();
  iniciarCarrossel();
});

pontos.forEach((ponto) => {
  ponto.addEventListener('click', () => {
    mostrarSlide(Number(ponto.dataset.index));
    pararCarrossel();
    iniciarCarrossel();
  });
});

const carrossel = document.querySelector('.carousel');
carrossel.addEventListener('mouseenter', pararCarrossel);
carrossel.addEventListener('mouseleave', iniciarCarrossel);

iniciarCarrossel();
