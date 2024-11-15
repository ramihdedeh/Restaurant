import loadHome from "./home";
import loadContact  from "./contact";
import loadMenu from "./menu";

function switchTab(tabfunction){
    const content = document.getElementById("content")
    content.innerHTML='';

    tabfunction();

}

function setupNavigation(){
    const navButtons=document.querySelectorAll("nav button")

        navButtons.forEach(button => {
            button.addEventListener("click" , event => {
                const tab = event.target.id

                if(tab === "home")switchTab(loadHome);
                if(tab === "contact")switchTab(loadContact);
                if(tab === "menu")switchTab(loadMenu);

            });
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHome(); // Load the Home tab by default
    setupNavigation(); // Set up navigation
  });

