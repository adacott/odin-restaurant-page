function createMain(main) {
    main.innerHTML = `
        <div class = "container">
            <div class = "card">
                <img src="#" alt="#">
                <div>
                    <h2>Pepperoni Pizza</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <p>£10.99</p>
                </div>
            </div>
        </div>
    `;
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