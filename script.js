// Expandable Box Functionality
function toggleBox(box) {
    // Remove active class from all products
    document.querySelectorAll('.product').forEach(item => {
        if (item !== box) {
            item.classList.remove('active');
        }
    });

    // Toggle the active class on the clicked product
    box.classList.toggle('active');

    // Update the total price
    const price = box.classList.contains('active') ? box.dataset.price : 0;
    document.getElementById('total-price').textContent = `$${price}.00 USD`;
}

// Add to Cart Functionality
function addToCart() {
    const selectedProduct = document.querySelector('.product.active');
    if (selectedProduct) {
        const price = selectedProduct.dataset.price;
        alert(`Added to Cart: $${price}.00 USD`);
    } else {
        alert('Please select a product before adding to cart.');
    }
}
