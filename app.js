'use strict'

const switcher = document.querySelector('.btn');

// Escuta o clique no botão
switcher.addEventListener('click', function() {
    // Alterna a classe entre light e dark no body
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Pega o nome da classe atual para decidir o texto do botão
    const className = document.body.className;

    if (className.includes("light-theme")) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('Tema atual: ' + className);
});