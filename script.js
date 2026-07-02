// MENU RESPONSIVO (CELULAR)
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.background = "#000";
    menu.style.position = "absolute";
    menu.style.top = "70px";
    menu.style.right = "20px";
    menu.style.padding = "10px";
  }
});

// SCROLL SUAVE (quando clica nos links do menu)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// BOTÃO WHATSAPP (link automático)
const whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("click", () => {
  whatsapp.href = "https://wa.me/5500000000000";
});
