export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content
  
    // Create a headline for the menu
    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    headline.style = "text-align: center; font-size: 2rem; color: #333; margin-bottom: 20px;";

    // Create a list to display menu items
    const menuList = document.createElement("ul");
    menuList.style = "list-style-type: none; padding: 0;";

    // Array of menu items
    const menuItems = ["Pizza", "Pasta", "Salad", "Desserts"];
    
    // Loop through the items and add them to the list
    menuItems.forEach(item => {
      const menuItem = document.createElement("li");
      menuItem.textContent = item;
      menuItem.style = "font-size: 1.2rem; color: #555; padding: 10px 0; border-bottom: 1px solid #ddd;";
      menuList.appendChild(menuItem);
    });
  
    // Append headline and menu list to the content
    content.appendChild(headline);
    content.appendChild(menuList);
}
