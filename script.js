// Product Database
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "electronics",
        price: 999,
        originalPrice: 1099,
        emoji: "📱",
        rating: 4.8,
        reviews: 324,
        description: "Latest flagship smartphone with advanced camera system. Perfect for content creators and gamers.",
        trending: true
    },
    {
        id: 2,
        name: "PlayStation 5",
        category: "gaming",
        price: 499,
        originalPrice: 499,
        emoji: "🎮",
        rating: 4.9,
        reviews: 1250,
        description: "Next-gen gaming console with stunning graphics and exclusive titles. Must-have for gamers!",
        trending: true
    },
    {
        id: 3,
        name: "Air Jordan 1 Retro",
        category: "fashion",
        price: 150,
        originalPrice: 170,
        emoji: "👟",
        rating: 4.7,
        reviews: 892,
        description: "Classic sneaker with modern vibes. Limited edition colorway.",
        trending: true
    },
    {
        id: 4,
        name: "Sony WH-1000XM5 Headphones",
        category: "accessories",
        price: 399,
        originalPrice: 449,
        emoji: "🎧",
        rating: 4.8,
        reviews: 567,
        description: "Best-in-class noise cancellation. Perfect for music lovers and productivity.",
        trending: true
    },
    {
        id: 5,
        name: "MacBook Pro 14\"",
        category: "electronics",
        price: 1999,
        originalPrice: 1999,
        emoji: "💻",
        rating: 4.9,
        reviews: 456,
        description: "Powerful laptop for creators and developers. M3 Pro chip with 8-core GPU."
    },
    {
        id: 6,
        name: "Supreme Hoodie",
        category: "fashion",
        price: 158,
        originalPrice: 198,
        emoji: "👕",
        rating: 4.6,
        reviews: 234,
        description: "Iconic streetwear hoodie. Limited stock, highly coveted by collectors."
    },
    {
        id: 7,
        name: "Nintendo Switch OLED",
        category: "gaming",
        price: 349,
        originalPrice: 349,
        emoji: "🎮",
        rating: 4.7,
        reviews: 789,
        description: "Next-gen portable gaming. Beautiful OLED display for immersive gameplay."
    },
    {
        id: 8,
        name: "Apple Watch Series 9",
        category: "accessories",
        price: 399,
        originalPrice: 429,
        emoji: "⌚",
        rating: 4.8,
        reviews: 445,
        description: "Premium smartwatch with health tracking and fitness features."
    },
    {
        id: 9,
        name: "Samsung Galaxy S24",
        category: "electronics",
        price: 799,
        originalPrice: 899,
        emoji: "📱",
        rating: 4.7,
        reviews: 612,
        description: "Flagship Android phone with AI features. Great for photography."
    },
    {
        id: 10,
        name: "Gaming Chair RGB",
        category: "gaming",
        price: 299,
        originalPrice: 349,
        emoji: "🪑",
        rating: 4.5,
        reviews: 321,
        description: "Ergonomic gaming chair with RGB lighting and adjustable features."
    },
    {
        id: 11,
        name: "Vintage Oversized Tee",
        category: "fashion",
        price: 45,
        originalPrice: 65,
        emoji: "👕",
        rating: 4.6,
        reviews: 567,
        description: "Trendy oversized t-shirt perfect for streetwear look."
    },
    {
        id: 12,
        name: "Airpods Pro Max",
        category: "accessories",
        price: 549,
        originalPrice: 549,
        emoji: "🎧",
        rating: 4.9,
        reviews: 234,
        description: "Premium wireless headphones with spatial audio technology."
    }
];

// State Management
let cart = [];
let filteredProducts = [...products];
let selectedProduct = null;
let currentQuantity = 1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    displayProducts(products);
    displayTrending();
});

// Search and Filter
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    filterProducts();
});

document.getElementById('categoryFilter')?.addEventListener('change', (e) => {
    filterProducts();
});

document.getElementById('priceFilter')?.addEventListener('change', (e) => {
    filterProducts();
});

function filterByCategory(category) {
    if (document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').value = category;
    }
    filterProducts();
}

function filterProducts() {
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const priceRange = document.getElementById('priceFilter')?.value || '';

    filteredProducts = products.filter(product => {
        let matchSearch = product.name.toLowerCase().includes(search);
        let matchCategory = !category || product.category === category;
        let matchPrice = !priceRange || checkPrice(product.price, priceRange);

        return matchSearch && matchCategory && matchPrice;
    });

    displayProducts(filteredProducts);
}

function checkPrice(price, range) {
    if (range === '0-50') return price <= 50;
    if (range === '50-100') return price > 50 && price <= 100;
    if (range === '100-500') return price > 100 && price <= 500;
    if (range === '500+') return price > 500;
    return true;
}

// Display Products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                ${product.emoji}
                ${product.trending ? '<span class="product-badge">TRENDING</span>' : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews} reviews)</div>
                <div class="product-price">
                    <span class="price">$${product.price}</span>
                    ${product.price < product.originalPrice ? `
                        <span class="original-price">$${product.originalPrice}</span>
                        <span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                    ` : ''}
                </div>
                <button onclick="event.stopPropagation(); addToCartDirect(${product.id})">Add to Cart 🛒</button>
            </div>
        </div>
    `).join('');
}

function displayTrending() {
    const trendingContainer = document.getElementById('trendingGrid');
    if (!trendingContainer) return;

    const trendingProducts = products.filter(p => p.trending);
    trendingContainer.innerHTML = trendingProducts.map(product => `
        <div class="trending-card" onclick="openProductModal(${product.id})">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 100%; height: 350px; display: flex; align-items: center; justify-content: center; font-size: 5em;">
                ${product.emoji}
            </div>
            <div class="trending-overlay">
                <h4>${product.name}</h4>
                <div style="margin-bottom: 10px;">⭐ ${product.rating}</div>
                <div class="trending-price">$${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Product Modal
function openProductModal(id) {
    selectedProduct = products.find(p => p.id === id);
    currentQuantity = 1;

    document.getElementById('modalImage').textContent = selectedProduct.emoji;
    document.getElementById('modalImage').style.fontSize = '5em';
    document.getElementById('modalImage').style.display = 'flex';
    document.getElementById('modalImage').style.alignItems = 'center';
    document.getElementById('modalImage').style.justifyContent = 'center';
    document.getElementById('modalTitle').textContent = selectedProduct.name;
    document.getElementById('modalCategory').textContent = selectedProduct.category;
    document.getElementById('modalRating').textContent = `⭐ ${selectedProduct.rating} (${selectedProduct.reviews} reviews)`;
    document.getElementById('modalDescription').textContent = selectedProduct.description;
    document.getElementById('modalPrice').textContent = `$${selectedProduct.price}`;
    document.getElementById('modalDiscount').textContent = selectedProduct.price < selectedProduct.originalPrice ? `-${Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%` : '';
    document.getElementById('quantity').value = 1;

    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function increaseQuantity() {
    document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value) + 1;
}

function decreaseQuantity() {
    const current = parseInt(document.getElementById('quantity').value);
    if (current > 1) {
        document.getElementById('quantity').value = current - 1;
    }
}

// Cart Management
function addToCart() {
    if (!selectedProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    addItemToCart(selectedProduct, quantity);
    closeModal();
}

function addToCartDirect(id) {
    const product = products.find(p => p.id === id);
    addItemToCart(product, 1);
}

function addItemToCart(product, quantity) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItems = document.getElementById('cartItems');
    const cartList = document.getElementById('cartList');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'block';

        cartList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.category}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');

        updateCartSummary();
    }
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartUI();
    }
}

function checkout() {
    if (cart.length === 0) return;
    alert('🎉 Thank you for your purchase! Order confirmed!');
    cart = [];
    saveCart();
    updateCartUI();
    showSection('shop');
}

// Local Storage
function saveCart() {
    localStorage.setItem('trendhub_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('trendhub_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0);
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};