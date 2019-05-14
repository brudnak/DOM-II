// Strict
"use strict";

// Selectors
const bodySelector = document.querySelector("html");
const mainNavigation = document.querySelector(".main-navigation");
const h2Intro = document.querySelector(".intro h2");
const navLink = document.querySelector(".nav-link");
const introPara = document.querySelector(".intro p");
const siteInput = document.querySelector("#form input");
const letsGoH2 = document.querySelector(".content-section h2");
const siteLinks = document.querySelector("a");

mouseOver();
keyDown();
wheelListener();
dragListener();
loadListener();
focusListener();
resizeListener();
scrollListener();
selectListener();
doubleClick();
preventDefault();

// Functions Section

// mouseover
function mouseOver() {
  h2Intro.addEventListener("mouseover", event => {
    h2Intro.style.color = "#fff";
    h2Intro.style.backgroundColor = "#3b5998";
    h2Intro.textContent = "Facebook Blue! Press Any Key To Reset Me!";
  });
}

// keydown
function keyDown() {
  bodySelector.addEventListener("keydown", event => {
    h2Intro.style.color = "#000";
    h2Intro.style.backgroundColor = "#fff";
    h2Intro.textContent = "Welcome To Fun Bus!";
  });
}

// wheel
function wheelListener() {
  bodySelector.addEventListener("wheel", event => {
    const colors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#8b00ff"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainNavigation.style.backgroundColor = randomColor;
    console.log(event);
  });
}

// drag
function dragListener() {
  let lastDrag = 0;
  navLink.addEventListener("drag", event => {
    // delay so only 1 alert prompt opens
    if (Date.now() - lastDrag > 1000) {
      alert("HEY! WAIT!!!\nWhere are you taking me?!?!");
      lastDrag = Date.now();
    }
  });
}

// load
function loadListener() {
  window.addEventListener("load", event => {
    alert("Welcome!\nYou've arrived at the Fun Bus Website!");
  });
}

// focus
function focusListener() {
  siteInput.addEventListener(
    "focus",
    event => {
      event.target.style.background = "#ff7f00";
      console.log(event);
    },
    true
  );

  siteInput.addEventListener(
    "blur",
    event => {
      event.target.style.background = "";
    },
    true
  );
}

// resize
function resizeListener() {
  window.addEventListener("resize", event => {
    bodySelector.style.backgroundColor = "rebeccapurple";
  });
}

// scroll
function scrollListener() {
  window.addEventListener("scroll", event => {
    introPara.textContent =
      "Cat ipsum dolor sit amet, hopped up on catnip and hack eats owners hair then claws head scratch the postman wake up lick paw wake up owner meow meow. Sun bathe fooled again thinking the dog likes me for destroy house in 5 seconds so ignore the squirrels, you'll never catch them anyway poop on floor and watch human clean up. Destroy couch play time, yet roll over and sun my belly.";
    introPara.style.backgroundColor = "#4b0082";
    introPara.style.color = "#fff";
  });
}

function selectListener() {
  window.addEventListener("select", event => {
    alert("Don't copy me");
    console.log(event);
  });
}

// dblclicl
function doubleClick() {
  introPara.addEventListener("dblclick", event => {
    introPara.style.width = "50%";
  });
}

// prevent default
function preventDefault() {
  siteLinks.addEventListener("click", event => {
    event.preventDefault();
  });
}
