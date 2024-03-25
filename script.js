"use strict";

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

//#region click - day toggle to Dark-theme
const icon = document.getElementById("icon");
const iconImg = document.getElementById("icon-img");
const iconNightmode = document.getElementById("icon-night");
const iconImgNightmode= document.getElementById("icon-img-night");

icon.addEventListener("click", () => {
  document.body.classList.add("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.style.display = "none";
    iconImg.style.display = "none";
    iconNightmode.style.display = "flex";
    iconImgNightmode.style.display = "flex";
    document.getElementById("contact-vector-email").src="/images/mail-contact-night.png";
    document.getElementById("contact-vector-phone").src="/images/phone-contact-night.png";
    return;
  } 


   document.body.classList.remove("dark-theme"); 
   iconImg.style.backgroundImage = "url(/images/Toggle-day.png)";
   icon.style.display = "flex";
   iconImg.style.display = "flex";
  document.getElementById("contact-vector-email").src="/images/mail-vector.png";
  document.getElementById("contact-vector-phone").src="/images/phone-vector.png"

    return;
});

//#endregion

//#region click -- night toggle to Day-theme
const iconNight = document.getElementById("icon-night");
const iconImgNight= document.getElementById("icon-img-night");
const iconDay = document.getElementById("icon");
const iconImgDay = document.getElementById("icon-img");

iconNight.addEventListener("click", () => {

    document.body.classList.remove("dark-theme");
    iconNight.style.display = "none";
    iconImgNight.style.display= "none";
    iconDay.style.display = "flex";
    iconImgDay.style.display = "flex";
    document.getElementById("contact-vector-email").src="/images/mail-vector.png";
    document.getElementById("contact-vector-phone").src="/images/phone-vector.png";
  
    return;
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
    return;
  }

  menu.classList.remove("sticky");
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
        link.style.color = "#FFFFFF";
      }
    });
  }
});
//#endregion

//#region revealing sections //
const sections = queryAll(".section");

const reavealingSect = function(entries, observer) {
  const [entry] = entries;
  console.log("entry: ", entry);
  console.log("entry.isIntersecting: ", entry.isIntersecting);
  if (!entry.isIntersecting) return;
  console.log(entries);
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionOberver = new IntersectionObserver(reavealingSect, {
  root: null,
  threshold: 0.1,
});

sections.forEach(function(section) {
  sectionOberver.observe(section);
  section.classList.add("section--hidden");
});
//#endregion



