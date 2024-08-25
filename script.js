const texto = document.getElementById('agrandarTexto');

texto.addEventListener('mouseover', () => {
    texto.style.fontSize = '2em';
});

texto.addEventListener('mouseout', () => {
    texto.style.fontSize = '1em';
});
