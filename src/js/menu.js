function createMain(main) {
    const container = main.querySelector(".container");
    main.removeChild(container);
}


function createMenu() {
    const content = document.getElementById("content");
    const section = content.lastChild;
    if (document.getElementById("menu")) {
        return;
    }
    section.id = "menu";
    const main = section.querySelector("main");
    createMain(main);
}

export { createMenu };