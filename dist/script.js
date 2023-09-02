function menuToggle() {
  console.log("click");
  let displayIcon = document.getElementById("mobile-menu-btn");
  let menu = document.getElementById("mobile-menu");
  if (displayIcon.src.match("./img/hamburger.svg")) {
    displayIcon.src = "./img/close.svg";
    menu.classList.add("flex");
    menu.classList.add("flex-col");
    menu.classList.remove("hidden");
  } else {
    displayIcon.src = "./img/hamburger.svg";
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    menu.classList.remove("flex-col");
  }
}

function dropdown() {
  let subMenu = document.getElementById("sub-menu");
  let subMenuIcon = document.getElementById("drop-down-arrow");
  if (subMenu.style.display === "none" || subMenu.style.display === "") {
    subMenu.style.display = "block";
    subMenuIcon.classList.add("rotate-180");
  } else {
    subMenu.style.display = "none";
    subMenuIcon.classList.remove("rotate-180");
  }
}

function expand(id) {
  let expandDiv = document.getElementById(`${id}`);
  if (expandDiv.style.display === "none" || expandDiv.style.display === "") {
    expandDiv.style.display = "block";
  } else {
    expandDiv.style.display = "none";
  }
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 40,
  direction: "horizontal",
  loop: false,

  containerModifierClass: "my-wrapper",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on("reachEnd", function () {
  let buttonNext = document.getElementsByClassName("swiper-button-next");
  buttonNext[0].style.display = "none";
  let buttonPrev = document.getElementsByClassName("swiper-button-prev");
  buttonPrev[0].style.display = "block";
});

swiper.on("reachBeginning", function () {
  let buttonNext = document.getElementsByClassName("swiper-button-next");
  buttonNext[0].style.display = "block";
  let buttonPrev = document.getElementsByClassName("swiper-button-prev");
  buttonPrev[0].style.display = "none";
});
