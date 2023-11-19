function createMain(main) {
    main.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("container");

    for (let i = 0; i < 8; i++) {
        // Create the card elements:
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = "";
        img.alt = "Menu item";

        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.textContent = "Pepperoni Pizza";
        const p1 = document.createElement("p"); // description
        p1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
        const p2 = document.createElement("p"); // price
        p2.textContent = "$10.99";

        // Structure the card:
        card.appendChild(img);
        card.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);

        // append the final card to the container:
        container.appendChild(card);
    }
    main.appendChild(container);


}


function createMenu() {
    if (document.getElementById("menu")) {
        return;
    }
    else {
        const content = document.getElementById("content");
        const section = content.lastChild;
        section.id = "menu";

        const main = section.querySelector("main");
        createMain(main);
    }


}

export { createMenu };