// Home page - load only featured products
document.addEventListener('DOMContentLoaded', () => {
    const featuredGrid = document.getElementById('featuredGrid');

    if (featuredGrid) {
        // Get all featured products
        const allProducts = getAllProducts();
        const featuredProducts = allProducts.filter(p => p.featured === true);

        featuredGrid.innerHTML = featuredProducts.map((product, index) => `
            <div class="product-card fade-on-scroll delay-${(index % 4) + 1}" data-product='${JSON.stringify(product)}'>
                <div class="card-visual">
                    <div class="card-orb ${index % 2 === 0 ? '' : 'orb-alt'}"></div>
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="card-info">
                    <h3>${product.name}</h3>
                    <p class="shade">${product.shade}</p>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add">Add to Bag</button>
                </div>
            </div>
        `).join('');

        // Add event listeners
        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.product-card');
                const productData = JSON.parse(card.dataset.product);
                addToCart(productData);

                btn.textContent = 'Added!';
                setTimeout(() => {
                    btn.textContent = 'Add to Bag';
                }, 1000);
            });
        });

        // Observe animations
        document.querySelectorAll('.fade-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
});
