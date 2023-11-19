import img from "./../images/logo.svg";

function createMainStructure() {
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
    return { home, header, main, footer };
}

function createHeader(header, img) {
    const div = document.createElement("div");
    const im = document.createElement("img");
    const title = document.createElement("h1");
    title.textContent = "Adam's Pizza Shack";
    im.src = img;
    im.height = "100";
    im.width = "100";
    div.appendChild(im);
    div.appendChild(title);
    header.appendChild(div);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    nav.appendChild(ul);
    ul.appendChild(li1);
    a1.textContent = "Home";
    li1.append(a1);
    ul.appendChild(li2);
    a2.textContent = "Menu";
    li2.append(a2);
    ul.appendChild(li3);
    a3.textContent = "Contact";
    li3.append(a3);

    header.appendChild(nav);
}

function createMain(main) {
    const div = document.createElement("div");
    div.classList.add("container");

    const div_about = document.createElement("div");
    div_about.classList.add("about");

    div.appendChild(div_about);
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    const div_about_text = document.createElement("div");
    div_about_text.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure quia nobis nihil commodi similique suscipit! Error similique maxime repellendus amet deleniti sint unde hic sit iste, temporibus accusantium nobis!"
    div_about.appendChild(h1);
    div_about.appendChild(div_about_text);

    main.appendChild(div);
}

function createFooter(footer) {
    const div = document.createElement("div");
    div.classList.add("copy-notice");
    div.textContent = "Coptright (C) adacott 2023";
    footer.appendChild(div);
}

function createInitialPage() {
    if (document.getElementById("home")) {
        return;
    } else {
        const content = document.getElementById("content");
        content.removeChild(content.lastChild);
        const { header, main, footer } = createMainStructure();
        createHeader(header, img);
        createMain(main);
        createFooter(footer);
    }
}

function createHome() {
    if (document.getElementById("home")) {
        return;
    }
    else {
        const content = document.getElementById("content");
        const section = content.lastChild;
        section.id = "home";
        const main = document.querySelector("main");
        main.innerHTML = ""; // clear the content of main

        createMain(main);
    }
}

export { createHome, createInitialPage };
