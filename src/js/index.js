import "./../scss/style.scss";
import "./home.js";
import "./menu.js";
import "./contact.js";
import { createHome } from "./home.js";


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log("Connected and watching");

// =======================================================================

window.onload = function () {
    createHome();
}

// Create an eventlistener for the home button to execute the function if not on initial page load
const homeBtn = document.querySelector("#home header nav ul li:nth-child(1)");
homeBtn.addEventListener("click", function () {
    createHome();
});

// createMenu();
// createContact();
