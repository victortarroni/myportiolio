"use strict";

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

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

//#region Burguer Menu

const burguerMenu = query("#menu-icon");
const respMenu = query("#menu");
const bttnClose = query("#btn-close");

const removeHidden = function() {
  respMenu.classList.remove("hidden-menu");
};

const closeMenu = function() {
  respMenu.classList.add("hidden-menu");
};

burguerMenu.addEventListener("click", removeHidden);
bttnClose.addEventListener("click", closeMenu);
//#endregion

//#region fixed menu //

const menuBar = query(".menu-holder");
const menuBarHeight = query("#menu")
  .getBoundingClientRect().height;
const menu = query("#menu");
const header = query("#header");

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

//#endregion

//#region smooth scrolling //
menuBar.addEventListener("click", function(elem) {
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
//#endregion

//#region faded menu //

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
//#endregion

//#region revealing sections //
const sections = queryAll(".section");

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
//#endregion

//#region Projects section //


/* The addEventListener(load) triggers the function when the page loads. This is the default behavior. */
window.addEventListener("load", () => {
  const slidesContainer = query(".slides");

  // I created this variable to fetch the number of slides. Since querySelectorAll returns an array, here we can retrieve the number of slides. //
  const slidesLength = queryAll(".slide").length;

  // Buttons//

  const prevButton = query(".slider-prev");
  const nextButton = query(".slider-next");

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
//#endregion
/**/



