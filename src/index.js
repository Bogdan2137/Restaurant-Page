import "./styles/style.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";
import "./imgs/bg.jpg";
import "./imgs/otherDivImg.jpg";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

loadHome();

homeBtn.addEventListener("click", () => {
    loadHome();
});
menuBtn.addEventListener("click", () => {
    loadMenu();
});
aboutBtn.addEventListener("click", () => {
    loadAbout();
});

//loadHome();

