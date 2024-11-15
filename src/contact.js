export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content
  
    // Create a container for the contact section
    const contactContainer = document.createElement("div");
    contactContainer.style = "text-align: center; padding: 20px;";

    // Add a headline
    const headline = document.createElement("h1");
    headline.textContent = "Get in Touch with Us!";
    headline.style = "margin-bottom: 20px; font-size: 2em; color: #333;";
  
    // Add contact information
    const contactInfo = document.createElement("p");
    contactInfo.textContent = "📞 Phone: 123-456-7890 | ✉️ Email: contact@bestrestaurant.com";
    contactInfo.style = "margin-bottom: 15px; font-size: 1.2em;";
  
    // Add location details
    const location = document.createElement("p");
    location.textContent = "📍 Address: 123 Food Street, Gourmet City, Yummyland";
    location.style = "margin-bottom: 20px; font-size: 1.2em;";
  
    // Add business hours
    const hours = document.createElement("p");
    hours.textContent = "⏰ Business Hours: Mon-Sun, 10:00 AM - 10:00 PM";
    hours.style = "margin-bottom: 15px; font-size: 1.2em;";
  
    // Append all elements to the container
    contactContainer.appendChild(headline);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(location);
    contactContainer.appendChild(hours);

    // Append the container to the content div
    content.appendChild(contactContainer);
}
