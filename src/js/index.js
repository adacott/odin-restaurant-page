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



// createHome();
// createMenu();
// createContact();
