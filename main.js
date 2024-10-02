document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.add-to-cart');
    button.addEventListener('click', function() {
        alert('Llavero de gato. ¡Ha sido agregado con exito! ');

});

    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    class ProductFactory {
        static createProduct(name, price) {
            return new Product(name, price);
        }
    }

    class Cart {
        constructor() {
            this.items = [];
        }

        addItem(item) {
            this.items.push(item);
            this.updateCart();
        }

        updateCart() {
            cartItems.innerHTML = '';
            let total = 0;
            this.items.forEach(item => {
                const cartItem = document.createElement('li');
                cartItem.textContent = `${item.name} - $${item.price}`;
                cartItems.appendChild(cartItem);
                total += parseFloat(item.price);
            });
            totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
        }
    }

    const cart = new Cart();

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');

            const product = ProductFactory.createProduct(productName, productPrice);
            cart.addItem(product);
        });
    });
});
