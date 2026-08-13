import "./styles/style.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./imgs/bg.jpg";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";

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

