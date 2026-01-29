// Shopping Cart State
let cart = [];
let appliedCoupon = null;

// Coupon Database
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, description: '10% off' },
    'LUXURY20': { type: 'percentage', value: 20, description: '20% off' },
    'SAVE15': { type: 'fixed', value: 15, description: '$15 off' },
    'FRENCH25': { type: 'percentage', value: 25, description: '25% off' }
};

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('zayneCart');
    const savedCoupon = localStorage.getItem('zayneCoupon');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    if (savedCoupon) {
        appliedCoupon = JSON.parse(savedCoupon);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('zayneCart', JSON.stringify(cart));
    if (appliedCoupon) {
        localStorage.setItem('zayneCoupon', JSON.stringify(appliedCoupon));
    } else {
        localStorage.removeItem('zayneCoupon');
    }
}

// Add item to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart();
}

// Update quantity
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else if (item.quantity > 10) {
            item.quantity = 10; // Max 10 items
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Apply coupon
function applyCoupon(code) {
    const couponCode = code.toUpperCase();
    const coupon = coupons[couponCode];

    const messageEl = document.getElementById('couponMessage');

    if (coupon) {
        appliedCoupon = { code: couponCode, ...coupon };
        saveCart();
        updateCartUI();
        messageEl.textContent = `✓ Coupon applied: ${coupon.description}`;
        messageEl.className = 'coupon-message success';
    } else {
        messageEl.textContent = '✗ Invalid coupon code';
        messageEl.className = 'coupon-message error';
        setTimeout(() => {
            messageEl.textContent = '';
            messageEl.className = 'coupon-message';
        }, 3000);
    }
}

// Calculate totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * (appliedCoupon.value / 100);
        } else {
            discount = appliedCoupon.value;
        }
    }

    const total = subtotal - discount;

    return { subtotal, discount, total };
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const subtotalPrice = document.getElementById('subtotalPrice');
    const discountRow = document.getElementById('discountRow');
    const discountAmount = document.getElementById('discountAmount');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const couponSection = document.getElementById('couponSection');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your bag is empty</div>';
        cartTotal.style.display = 'none';
        checkoutBtn.style.display = 'none';
        couponSection.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.shade}</p>
                    <span class="cart-item-price">$${item.price} each</span>
                    <div class="quantity-controls">
                        <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            </div>
        `).join('');

        // Calculate totals
        const { subtotal, discount, total } = calculateTotals();

        subtotalPrice.textContent = `$${subtotal.toFixed(2)}`;

        if (discount > 0) {
            discountRow.style.display = 'flex';
            discountAmount.textContent = `-$${discount.toFixed(2)}`;
        } else {
            discountRow.style.display = 'none';
        }

        totalPrice.textContent = `$${total.toFixed(2)}`;
        cartTotal.style.display = 'block';
        checkoutBtn.style.display = 'block';
        couponSection.style.display = 'flex';

        // Add event listeners for quantity controls
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const action = btn.dataset.action;
                updateQuantity(id, action === 'increase' ? 1 : -1);
            });
        });

        // Add remove event listeners
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(parseInt(btn.dataset.id));
            });
        });
    }
}

// Open cart drawer
function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
}

// Close cart drawer
function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
}

// Load products into grid
function loadProducts(category = 'all') {
    const productGrid = document.getElementById('productGrid');

    let products = [];
    if (category === 'all') {
        products = getAllProducts();
    } else {
        products = getProductsByCategory(category);
    }

    if (products.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; color: var(--color-text-muted); grid-column: 1/-1;">No products found in this category.</p>';
        return;
    }

    productGrid.innerHTML = products.map((product, index) => `
        <div class="product-card fade-on-scroll delay-${(index % 4) + 1}" data-product='${JSON.stringify(product)}'>
            <div class="card-visual">
                <div class="card-orb ${index % 2 === 0 ? '' : 'orb-alt'}"></div>
                <img src="${product.image}" alt="${product.name}" class="product-img" 
                     onerror="this.src='assets/images/lipstick.png'">
            </div>
            <div class="card-info">
                <h3>${product.name}</h3>
                <p class="shade">${product.shade}</p>
                <span class="price">$${product.price.toFixed(2)}</span>
                <button class="btn-add">Add to Bag</button>
            </div>
        </div>
    `).join('');

    // Re-observe for scroll animations
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const productData = JSON.parse(card.dataset.product);
            addToCart(productData);

            // Visual feedback
            btn.textContent = 'Added!';
            setTimeout(() => {
                btn.textContent = 'Add to Bag';
            }, 1000);
        });
    });
}

// Intersection Observer for Fade In on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Load existing cart
    loadCart();

    // Load all products initially
    loadProducts('all');

    // Category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Load products for category
            const category = btn.dataset.category;
            loadProducts(category);
        });
    });

    // Observe scroll animations
    document.querySelectorAll('.fade-on-scroll, .fade-in-up, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = 80;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Cart toggle
    document.getElementById('cartToggle').addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        closeCart();
    });

    // Apply coupon
    document.getElementById('applyCouponBtn').addEventListener('click', () => {
        const code = document.getElementById('couponInput').value.trim();
        if (code) {
            applyCoupon(code);
        }
    });

    // Inject Modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="checkoutModal">
            <div class="checkout-modal" id="checkoutFormContainer">
                <button class="close-cart" style="position:absolute; right:1.5rem; top:1.5rem; color:var(--color-text-main);" onclick="closeModal()">×</button>
                <h2 class="modal-title">Complete Your Order</h2>
                <form class="checkout-form" id="checkoutForm">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" id="customerName" required placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" required placeholder="Enter phone number">
                    </div>
                    <div class="form-group">
                        <label>Email (Optional)</label>
                        <input type="email" placeholder="Enter email address">
                    </div>
                    <button type="submit" class="btn-submit">Confirm Order</button>
                </form>
            </div>
            
            <div class="thank-you-modal" id="thankYouContainer" style="display: none;">
                <div class="thank-you-content">
                    <h2>Merci!</h2>
                    <div class="thank-you-note">
                        "Hi <span id="thankYouName">Beautiful</span>,<br>
                        Thanks for purchasing ZAYNÉ products.<br>
                        Welcome to the art of weightless luxury."
                    </div>
                    <p>Your order has been confirmed.</p>
                    <button class="btn-submit" onclick="closeModal()">Continue Shopping</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Modal Functions
    window.closeModal = function () {
        const modal = document.getElementById('checkoutModal');
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            // Reset state
            document.getElementById('checkoutFormContainer').style.display = 'block';
            document.getElementById('thankYouContainer').style.display = 'none';
        }, 400);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            closeCart();
            const modal = document.getElementById('checkoutModal');
            modal.style.display = 'flex';
            // Slight delay for animation
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        });
    }

    // Handle Form Submit
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('customerName').value;

            // Show Thank You
            document.getElementById('checkoutFormContainer').style.display = 'none';
            document.getElementById('thankYouContainer').style.display = 'block';
            document.getElementById('thankYouName').textContent = name;

            // Clear cart logic here
            cart = [];
            saveCart();
            updateCartUI();
        });
    }

    // Parallax effect for decorative elements
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -0.01);
        const moveY = (e.clientY * -0.01);

        const decorative = document.querySelectorAll('.heart-sticker, .balloon-sticker, .sparkle');
        decorative.forEach((el, index) => {
            const speed = (index + 1) * 0.03;
            el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });
});
