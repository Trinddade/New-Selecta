// checkout.js

function carregarCheckout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    checkoutItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';
        itemDiv.innerHTML = `
            <h4>${item.title}</h4>
            <p>Preço: ${item.price}</p>
        `;
        checkoutItemsContainer.appendChild(itemDiv);
    });
}

window.onload = carregarCheckout;
