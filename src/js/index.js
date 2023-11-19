import "./../scss/style.scss";
import "./contact.js";
import { createHome, createInitialPage } from "./home.js";
import { createMenu } from "./menu.js";


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log("Connected and watching");

// =======================================================================
window.onload = function () {
    createInitialPage();

    const homeBtn = document.querySelector("header nav ul li:nth-child(1)");
    homeBtn.addEventListener("click", createHome);
    const menuBtn = document.querySelector("header nav ul li:nth-child(2)");
    menuBtn.addEventListener("click", createMenu);
    const contactBtn = document.querySelector("header nav ul li:nth-child(3)");
    contactBtn.addEventListener("click", createContact);
}


// createMenu();
// createContact();
