"use stric";

var icon = document.getElementById("icon");
// callback -> function passa como argumento
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  // when we click on the icon, it will add or remove the dark theme to the body
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/images/white-vector.png";
  } else {
    icon.src = "/images/Vector.png";
  }
});
//

// burguer Menu

const burguerMenu = document.querySelector("#menu-icon");

const respMenu = document.querySelector("#menu");

const bttnClose = document.querySelector("#btn-close");

const removeHidden = function () {
  respMenu.classList.remove("hidden-menu");
};

const closeMenu = function () {
  respMenu.classList.add("hidden-menu");
};

burguerMenu.addEventListener("click", removeHidden);

bttnClose.addEventListener("click", closeMenu);

// fixed menu //

const menuBar = document.querySelector(".menu-holder");
const menuBarHeight = document
  .querySelector("#menu")
  .getBoundingClientRect().height;
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");

const fixedMenu = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
};

const menuObserver = new IntersectionObserver(fixedMenu, {
  root: null,
  threshold: 0,
  rootMargin: `-${menuBarHeight}px`,
});

menuObserver.observe(header);

// Rolamento //
document
  .querySelector(".menu-holder")
  .addEventListener("click", function (elem) {
    elem.preventDefault();
    respMenu.classList.add("hidden-menu");
    if (elem.target.classList.contains("link")) {
      const id = elem.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// about me content smooth scrooling //

document
  .querySelector("#about-me-btn")
  .addEventListener("click", function (elem) {
    console.log(elem);
    elem.preventDefault();
    if (elem.target.id) {
      const id = elem.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// faded menu //

const fadedmenu = function (e) {
  if (e.target.classList.contains("link")) {
    const link = e.target;
    const brothers = link.closest("#menu").querySelectorAll(".link");
    const icon = link.closest("#menu").querySelector("#icon");

    brothers.forEach((brother) => {
      if (brother !== link) {
        link.style.color = "#00D1C7";
      }
    });
    icon.style.opacity = 0.5;
  }
};

document.querySelector("#menu").addEventListener("mouseover", fadedmenu);

document.querySelector("#menu").addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("link")) {
    const link = e.target;
    const brothers = link.closest("#menu").querySelectorAll(".link");
    const icon = link.closest("#menu").querySelector("#icon");
    brothers.forEach((brother) => {
      if (brother !== link) {
        link.style.color = "var(--text-primary)";
      }
    });
    icon.style.opacity = 1;
  }
});

// revealing sections //
const sections = document.querySelectorAll(".section");

const reavealingSect = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionOberver = new IntersectionObserver(reavealingSect, {
  root: null,
  threshold: 0.4,
});

sections.forEach(function (section) {
  sectionOberver.observe(section);
  section.classList.add("section--hidden");
});

// Projects //

// Contador para saber qual o slide atual
// No click do next, precisa aumentar o contador e atualizar o left do container slides
// Usar contador pra achar % pra por no left
// Checar os limites mínimos e máximos para ciclar o contador

// project solution//

/* o addEventListener(load) aciona a funcao quando a pagina carrega. Esse è o padrão. */
window.addEventListener("load", () => {
  const slidesContainer = document.querySelector(".slides");

  // criei essa variavel para pegar os numeros de slides. Ja que o queryselectorall retorna uma array, aqui a gente consegue tirar o numero de slides.
  const slidesLength = document.querySelectorAll(".slide").length;

  // Buttons//

  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");

  // counter è a representacao numerica do slide atual//
  let slide = 1;

  // aqui è necessario mover o slide para a esquerda para que o proximo entre, por isso os valores nagtivos abaixo//

  // 1: 0
  // 2: -100%
  // 3: -200%

  // * / sempre resolve primeiro do que + - por isso, quando se tem uma some ou uma subtracao para ser calculada antes de uma multiplicacao ou divisap, se precisa a utilizacao de (). ex: `${ (slide - 1) * -100 }%`//
  // O nome desses parênteses na matemática é "precedência"

  console.log("slidesLength", slidesLength);

  nextButton.addEventListener("click", () => {
    console.log(1);
    if (slide === slidesLength) {
      /* return è para abortar a funçao*/
      return;
    }
    slide++;
    slidesContainer.style.left = `${(slide - 1) * -100}%`;
  });

  prevButton.addEventListener("click", () => {
    console.log(2);
    if (slide === 1) {
      return;
    }
    slide--;
    slidesContainer.style.left = `${(slide - 1) * -100}%`;
  });
});

/**/
