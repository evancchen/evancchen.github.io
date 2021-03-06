function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    const chefImage = document.createElement("img");
    chefImage.src = "images/home.webp";
    chefImage.alt = "Chef";
    home.appendChild(createParagraph("First cafe for hunters"));
    home.appendChild(createParagraph("Started since Greed Island's release."));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order from us now!"));
    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;