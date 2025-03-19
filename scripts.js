
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

// ================

let elementos = document.querySelectorAll(".hidden");

const observe = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("fade-in"); // Adiciona uma classe para animação
            observe.unobserve(entrada.target); // Para observar após a animação
        }
    });
}, { threshold: 0.1 }); // Define quando o elemento deve ser visível para acionar a função

elementos.forEach((elemento) => observe.observe(elemento));
