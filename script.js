"use stric";

//#region Dark-theme
const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/images/white-vector.png";
  } else {
    icon.src = "/images/Vector.png";
  }
});
//#endregion

// burguer Menu

const burguerMenu = document.querySelector("#menu-icon");

const respMenu = document.querySelector("#menu");

const bttnClose = document.querySelector("#btn-close");

const removeHidden = function() {
  respMenu.classList.remove("hidden-menu");
};

const closeMenu = function() {
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

const fixedMenu = function(entries) {
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
  .addEventListener("click", function(elem) {
    elem.preventDefault();
    respMenu.classList.add("hidden-menu");
    if (elem.target.classList.contains("link")) {
      const id = elem.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  });

// about me content smooth scrooling //

document
  .querySelector("#about-me-btn")
  .addEventListener("click", function(elem) {
    console.log(elem);
    elem.preventDefault();
    if (elem.target.id) {
      const id = elem.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  });

// faded menu //

const fadedmenu = function(e) {
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

document.querySelector("#menu").addEventListener("mouseout", function(e) {
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

const reavealingSect = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionOberver = new IntersectionObserver(reavealingSect, {
  root: null,
  threshold: 0.4,
});

sections.forEach(function(section) {
  sectionOberver.observe(section);
  section.classList.add("section--hidden");
});

// Projects section //


/* The addEventListener(load) triggers the function when the page loads. This is the default behavior. */
window.addEventListener("load", () => {
  const slidesContainer = document.querySelector(".slides");

  // I created this variable to fetch the number of slides. Since querySelectorAll returns an array, here we can retrieve the number of slides. //
  const slidesLength = document.querySelectorAll(".slide").length;

  // Buttons//

  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");

  // 'counter' is the numerical representation of the current slide. //
  let slide = 1;

  // Here, it's necessary to move the slide to the left so that the next one enters, hence the negative values below. //

  // 1: 0
  // 2: -100%
  // 3: -200%

  // * always takes precedence over + and -, so when you have addition or subtraction to be calculated before multiplication or division, the use of parentheses is required. For example: `${(slide - 1) * -100}%` //
  // The name for these parentheses in mathematics is "precedence."

  console.log("slidesLength", slidesLength);

  nextButton.addEventListener("click", () => {
    console.log(1);
    if (slide === slidesLength) {
      /* 'return' is to abort the function. */
      slide = 0;
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