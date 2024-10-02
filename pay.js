document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            const confirmAdd = confirm(`¿Deseas agregar ${name} al carrito por $${price}?`);
            if (confirmAdd) {
                const listItem = document.createElement('li');
                listItem.textContent = `${name} - $${price}`;
                cartItems.appendChild(listItem);

                totalPrice += price;
                totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
            }
        });
    });
});
