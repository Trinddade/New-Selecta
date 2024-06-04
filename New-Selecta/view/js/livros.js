function searchBooks() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.livro-card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function addToCart(title, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.title === title);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ title, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} foi adicionado ao carrinho!`);
}