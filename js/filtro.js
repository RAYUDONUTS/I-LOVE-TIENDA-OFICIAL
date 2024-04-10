const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');
const footer = document.getElementById('pie-pagina');

searchInput.addEventListener('input', filterProducts);

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    let noMatchingProducts = true;

    products.forEach(product => {
        const flavor = product.querySelector('.flavor').textContent.toLowerCase();
        const description = product.querySelector('.description').textContent.toLowerCase();

        if (flavor.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
            noMatchingProducts = false;
        } else {
            product.style.display = 'none';
        }
    });

    // Controla la visibilidad del footer
    if (noMatchingProducts) {
        footer.style.display = 'none'; // Oculta el footer si no hay productos coincidentes
    } else {
        footer.style.display = 'block'; // Muestra el footer si hay productos coincidentes
    }
}
