import logo from "./../images/map.png";

function createMain(main) {
    const container = document.createElement("div");
    container.classList.add("container");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    const h4 = document.createElement("h4");
    h4.textContent = "Contact us at:";
    const phoneNum = document.createElement("div");
    phoneNum.textContent = "Phone: 555-555-5555";
    const email = document.createElement("div");
    email.textContent = "apizzashack@email.com";
    const twitter = document.createElement("div");
    twitter.textContent = "####@apizzashack";
    const facebook = document.createElement("div");
    facebook.textContent = "@apizzashack";
    container.appendChild(contactInfo);
    contactInfo.appendChild(h4);
    contactInfo.appendChild(phoneNum);
    contactInfo.appendChild(email);
    contactInfo.appendChild(twitter);
    contactInfo.appendChild(facebook);

    const map = document.createElement("div");
    map.classList.add("map");
    map.style.marginBottom = "20px";
    const img = document.createElement("img");
    img.src = logo;
    img.style.height = "100%";
    img.style.width = "100%";
    img.alt = "Map of our location";
    map.appendChild(img);

    main.appendChild(container);
    main.appendChild(map);
}

function createContact() {
    if (document.getElementById("contact")) {
        return;
    }
    else {
        const content = document.getElementById("content");
        const section = content.lastChild;
        section.id = "contact";

        const main = section.querySelector("main");
        main.innerHTML = "";
        createMain(main);
    }
}

export { createContact };