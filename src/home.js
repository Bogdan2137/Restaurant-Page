const content = document.getElementById("content");

export function loadHome() {
    const titleSection = document.createElement("section");
        //create first Section with title and paragraph
        const titleHeading = document.createElement("h1");
        titleHeading.textContent = "Welcome to the Restaurant Page!";
        titleSection.appendChild(titleHeading);

        const titleParagraph = document.createElement("p");
        titleParagraph.textContent = "Enjoy the best food in town.";
        titleSection.appendChild(titleParagraph);

        content.appendChild(titleSection);

        //create second Section with h2 and p
        const aboutSection = document.createElement("section");

        const aboutHeading = document.createElement("h2");
        aboutHeading.textContent = "Lorem Ipsum";
        aboutSection.appendChild(aboutHeading);

        const aboutParagraph = document.createElement("p");
        aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        aboutSection.appendChild(aboutParagraph);

        content.appendChild(aboutSection);

        //create third Section with h2 and p
        const contactSection = document.createElement("section");

        const contactHeading = document.createElement("h3");
        contactHeading.textContent = "Contact Us";
        contactSection.appendChild(contactHeading);

        const contactParagraph = document.createElement("p");
        contactParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        contactSection.appendChild(contactParagraph);

        content.appendChild(contactSection);
}