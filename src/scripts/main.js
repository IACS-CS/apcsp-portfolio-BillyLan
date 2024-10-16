

import "@picocss/pico/css/pico.min.css";
import "../styles/styles.css";
// Add imports here
import Aos from "aos";
import "aos/dist/aos.css";

console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  //
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)