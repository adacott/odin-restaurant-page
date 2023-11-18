import "./../scss/style.scss";
import "./contact.js";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log("Connected and watching");

// =======================================================================
window.onload = function () {
    createHome();

    const homeBtn = document.querySelector("header nav ul li:nth-child(1)");
    homeBtn.addEventListener("click", createHome);

    // Create an eventlistener for the menu button to execute the function
    const menuBtn = document.querySelector("header nav ul li:nth-child(2)");
    menuBtn.addEventListener("click", createMenu);
}


// createMenu();
// createContact();
