import "./../scss/style.scss";
import "./home.js";
import "./menu.js";
import "./contact.js";
import img from "./../images/pep_pizza_icon.jpeg";


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log("Connected and watching");

// Initial page load setup:
// This will create and setup the header, main, and footer elements for manipulation by the rest of the modules
// In this way, on load, the page will dynamically add the content for the header, main, and footer sections, then 
// createHome will simply redo all of the initial setup to take you back to the home page when the link is clicked
window.onload = function () {
    const content = document.getElementById("content");
    const home = document.createElement("div");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    content.appendChild(home);
    home.id = "home";
    home.appendChild(header);
    home.appendChild(main);
    home.appendChild(footer);

    // Elements for the creation of the header:
    const div = document.createElement("div");
    const im = document.createElement("img");
    const title = document.createElement("h1");
    title.textContent = "Adam's Pizza Shack";

    div.appendChild(im);
    div.appendChild(title);
    header.appendChild(div);
}

// createHome();
// createMenu();
// createContact();
