function orderViaMessenger(button) {
    const messengerURL = `https://www.messenger.com/t/${button.dataset.messenger}`;

    window.open(messengerURL, '_blank');
}

function showOrderOptions(button) {
    // Oculta el botón original de "Pedir Ahora"
    button.style.display = 'none';

    // Muestra las opciones de pedido
    const orderOptions = button.nextElementSibling;
    orderOptions.style.display = 'flex'; // Puedes ajustar el estilo según tus necesidades
}

function orderViaWhatsApp(button) {
    const whatsappNumber = button.dataset.whatsapp;
    const productContainer = button.closest('.product');
    const productId = productContainer.dataset.productId;
    const flavor = productContainer.querySelector('.flavor').textContent;
    const description = productContainer.querySelector('.description').textContent;

    // Construye el mensaje con el número de producto entre corchetes y en negrita
    const message = `¡Hola! Estoy interesado en comprar la dona de ${flavor} [${productId}]. \n${description}`;

    // Construye la URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Abre la URL en una nueva pestaña
    window.open(whatsappURL, '_blank');
}
