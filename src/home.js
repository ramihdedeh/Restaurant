import risimage from './ris.jpg';

export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    // Create a headline
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to The Best Restaurant!";

    // Create a short description
    const description = document.createElement("p");
    description.textContent = "At The Best Restaurant, we serve delicious food with a passion.";

    // Append headline and description
    content.appendChild(headline);
    content.appendChild(description);

    // Create the second section (image and text side-by-side)
    const divsec = document.createElement("div");
    divsec.style = "display: flex; align-items: flex-start; gap: 20px; margin-top: 20px;";

    // Create image element
    const img = document.createElement("img");
    img.src = risimage;
    img.alt = "Restaurant Image"; // Add alt text for accessibility
    img.style = "width: 100%; max-width: 400px; height: auto; border-radius: 8px;";

    // Create the content paragraph next to the image
    const paragraph = document.createElement("p");
    paragraph.textContent = "At The Best Restaurant, we serve delicious food with a passion. Our chefs use only the finest ingredients to prepare mouth-watering dishes that will leave you coming back for more.";
    paragraph.style = "max-width: 400px; font-size: 1rem; color: #555;";

    // Create additional info paragraph
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Whether you're here for a casual meal with friends or a special celebration, we ensure that every dining experience is exceptional. Join us today and taste the best!";
    paragraph2.style = "max-width: 400px; font-size: 1rem; color: #555; margin-top: 10px;";

    // Add elements to the divsec
    divsec.appendChild(img);
    divsec.appendChild(paragraph);
    divsec.appendChild(paragraph2);

    // Append everything to the content
    content.appendChild(divsec);
}
