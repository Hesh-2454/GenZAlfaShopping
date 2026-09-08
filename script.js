// Product Database
const products = [
    // MAKEUP & BEAUTY (Sephora Style)
    {
        id: 1,
        name: "NARS Blush - Orgasm",
        category: "makeup",
        price: 32,
        originalPrice: 32,
        emoji: "💄",
        rating: 4.9,
        reviews: 2341,
        description: "Iconic peachy-pink blush. Perfect for all skin tones. Must-have for makeup lovers!",
        trending: true
    },
    {
        id: 2,
        name: "MAC Lipstick - Ruby",
        category: "makeup",
        price: 18,
        originalPrice: 18,
        emoji: "💋",
        rating: 4.8,
        reviews: 1876,
        description: "Classic red lipstick. Creamy formula that lasts all day. A timeless essential.",
        trending: true
    },
    {
        id: 3,
        name: "Fenty Beauty Pro Filt'r Foundation",
        category: "makeup",
        price: 42,
        originalPrice: 42,
        emoji: "✨",
        rating: 4.9,
        reviews: 3124,
        description: "Full coverage foundation with 50+ shades. Lightweight and long-lasting.",
        trending: true
    },
    {
        id: 4,
        name: "Urban Decay Naked Palette",
        category: "makeup",
        price: 54,
        originalPrice: 54,
        emoji: "👁️",
        rating: 4.8,
        reviews: 2567,
        description: "12 neutral eyeshadow colors. Highly pigmented and blendable. Industry classic!",
        trending: true
    },
    {
        id: 5,
        name: "Maybelline Mascara - Lash Sensational",
        category: "makeup",
        price: 8,
        originalPrice: 10,
        emoji: "👁️",
        rating: 4.7,
        reviews: 4321,
        description: "Volumizing mascara. Budget-friendly and effective. Fans love it!",
        trending: false
    },
    {
        id: 6,
        name: "Charlotte Tilbury Highlighter",
        category: "makeup",
        price: 48,
        originalPrice: 48,
        emoji: "✨",
        rating: 4.9,
        reviews: 1243,
        description: "Luxury highlighter with subtle glow. Creates that perfect luminous look.",
        trending: false
    },
    
    // GIRLS STUFF & SQUISHEEZ
    {
        id: 7,
        name: "Squishmallow Axolotl 16\"",
        category: "girls_stuff",
        price: 28,
        originalPrice: 35,
        emoji: "🦑",
        rating: 4.9,
        reviews: 5432,
        description: "Ultra-soft and huggable axolotl plush. Perfect for collectors!",
        trending: true
    },
    {
        id: 8,
        name: "Squishmallow Starbucks Collection",
        category: "girls_stuff",
        price: 16,
        originalPrice: 20,
        emoji: "☕",
        rating: 4.8,
        reviews: 3456,
        description: "Limited edition Starbucks themed squishmallows. Highly collectible!",
        trending: true
    },
    {
        id: 9,
        name: "Pop It Fidget Toy - Rainbow",
        category: "girls_stuff",
        price: 12,
        originalPrice: 18,
        emoji: "🌈",
        rating: 4.6,
        reviews: 6789,
        description: "Satisfying pop-it toy. Helps with stress relief and focus.",
        trending: false
    },
    {
        id: 10,
        name: "Mini Cute Backpack - Pink",
        category: "girls_stuff",
        price: 35,
        originalPrice: 45,
        emoji: "🎒",
        rating: 4.7,
        reviews: 2134,
        description: "Adorable mini backpack. Perfect for carrying essentials. Super trendy!",
        trending: false
    },
    {
        id: 11,
        name: "Pusheen Plushie Collection",
        category: "girls_stuff",
        price: 22,
        originalPrice: 28,
        emoji: "🐱",
        rating: 4.8,
        reviews: 4567,
        description: "Cute Pusheen cat plushies. Available in multiple colors. Adorable!",
        trending: true
    },
    {
        id: 12,
        name: "Phone Charm - Pearl Aesthetic",
        category: "girls_stuff",
        price: 8,
        originalPrice: 12,
        emoji: "📱",
        rating: 4.5,
        reviews: 3221,
        description: "Cute pearl phone charm. Adds that extra aesthetic touch to your phone!",
        trending: false
    },
    
    // ACCESSORIES (Tech & Fashion)
    {
        id: 13,
        name: "Sony WH-1000XM5 Headphones",
        category: "accessories",
        price: 399,
        originalPrice: 449,
        emoji: "🎧",
        rating: 4.9,
        reviews: 5678,
        description: "Best-in-class noise cancellation. Premium sound quality. Industry leader!",
        trending: true
    },
    {
        id: 14,
        name: "Apple Watch Series 9",
        category: "accessories",
        price: 399,
        originalPrice: 429,
        emoji: "⌚",
        rating: 4.8,
        reviews: 4456,
        description: "Premium smartwatch with health tracking. Seamless iOS integration.",
        trending: true
    },
    {
        id: 15,
        name: "Airpods Pro Max",
        category: "accessories",
        price: 549,
        originalPrice: 549,
        emoji: "🎧",
        rating: 4.9,
        reviews: 2345,
        description: "Premium wireless headphones with spatial audio. Best audio quality!",
        trending: true
    },
    {
        id: 16,
        name: "Designer Phone Case - Gucci Style",
        category: "accessories",
        price: 25,
        originalPrice: 35,
        emoji: "📱",
        rating: 4.6,
        reviews: 3124,
        description: "Luxury designer-inspired phone case. Protects and looks amazing!",
        trending: false
    },
    {
        id: 17,
        name: "Pearl Necklace - Delicate",
        category: "accessories",
        price: 45,
        originalPrice: 65,
        emoji: "💎",
        rating: 4.7,
        reviews: 2876,
        description: "Elegant pearl necklace. Timeless and versatile. Perfect for any outfit!",
        trending: false
    },
    {
        id: 18,
        name: "Gold Hoop Earrings",
        category: "accessories",
        price: 22,
        originalPrice: 32,
        emoji: "✨",
        rating: 4.8,
        reviews: 4123,
        description: "Classic gold hoops. A wardrobe staple. Goes with everything!",
        trending: false
    },
    
    // FASHION
    {
        id: 19,
        name: "Air Jordan 1 Retro High OG",
        category: "fashion",
        price: 180,
        originalPrice: 220,
        emoji: "👟",
        rating: 4.9,
        reviews: 6234,
        description: "Iconic Jordan 1 in limited colorway. A sneakerhead essential!",
        trending: true
    },
    {
        id: 20,
        name: "Supreme Hoodie - Red",
        category: "fashion",
        price: 158,
        originalPrice: 198,
        emoji: "👕",
        rating: 4.7,
        reviews: 3456,
        description: "Legendary Supreme hoodie. Limited stock. Highly collectible streetwear!",
        trending: true
    },
    {
        id: 21,
        name: "Vintage Oversized Band Tee",
        category: "fashion",
        price: 45,
        originalPrice: 65,
        emoji: "👕",
        rating: 4.6,
        reviews: 2876,
        description: "Trendy vintage band t-shirt. Perfect for streetwear aesthetic!",
        trending: true
    },
    {
        id: 22,
        name: "Nike Dunks Low Retro",
        category: "fashion",
        price: 110,
        originalPrice: 130,
        emoji: "👟",
        rating: 4.8,
        reviews: 4567,
        description: "Classic Nike Dunks. Versatile and timeless. Pairs with everything!",
        trending: false
    },
    {
        id: 23,
        name: "Baggy Mom Jeans - Vintage Wash",
        category: "fashion",
        price: 68,
        originalPrice: 88,
        emoji: "👖",
        rating: 4.7,
        reviews: 3245,
        description: "Trendy baggy jeans. Comfortable and stylish. Gen Z favorite!",
        trending: false
    },
    {
        id: 24,
        name: "Crop Top White",
        category: "fashion",
        price: 28,
        originalPrice: 38,
        emoji: "👕",
        rating: 4.6,
        reviews: 4123,
        description: "Simple white crop top. Essential for any wardrobe. Easy to style!",
        trending: false
    },
    
    // GAMING
    {
        id: 25,
        name: "PlayStation 5",
        category: "gaming",
        price: 499,
        originalPrice: 499,
        emoji: "🎮",
        rating: 4.9,
        reviews: 7821,
        description: "Next-gen gaming console with stunning graphics. Must-have for gamers!",
        trending: true
    },
    {
        id: 26,
        name: "Nintendo Switch OLED",
        category: "gaming",
        price: 349,
        originalPrice: 349,
        emoji: "🎮",
        rating: 4.7,
        reviews: 5432,
        description: "Portable gaming perfection. Beautiful OLED display. Play anywhere!",
        trending: true
    },
    {
        id: 27,
        name: "Gaming Chair RGB - DXRacer",
        category: "gaming",
        price: 299,
        originalPrice: 349,
        emoji: "🪑",
        rating: 4.6,
        reviews: 3876,
        description: "Ergonomic gaming chair with RGB lighting. Comfortable for long sessions!",
        trending: true
    },
    {
        id: 28,
        name: "Razer DeathAdder Pro Mouse",
        category: "gaming",
        price: 69,
        originalPrice: 89,
        emoji: "🖱️",
        rating: 4.8,
        reviews: 4234,
        description: "Professional gaming mouse. Precision tracking. Esports approved!",
        trending: false
    },
    {
        id: 29,
        name: "Mechanical Gaming Keyboard RGB",
        category: "gaming",
        price: 129,
        originalPrice: 159,
        emoji: "⌨️",
        rating: 4.7,
        reviews: 3456,
        description: "Mechanical keyboard with customizable RGB. Ultra-responsive!",
        trending: false
    },
    {
        id: 30,
        name: "Gaming Monitor 27\" 144Hz",
        category: "gaming",
        price: 279,
        originalPrice: 349,
        emoji: "🖥️",
        rating: 4.8,
        reviews: 2876,
        description: "High refresh rate monitor. Fast and smooth gameplay. Competitive edge!",
        trending: false
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
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';\n    const category = document.getElementById('categoryFilter')?.value || '';\n    const priceRange = document.getElementById('priceFilter')?.value || '';\n\n    filteredProducts = products.filter(product => {\n        let matchSearch = product.name.toLowerCase().includes(search);\n        let matchCategory = !category || product.category === category;\n        let matchPrice = !priceRange || checkPrice(product.price, priceRange);\n\n        return matchSearch && matchCategory && matchPrice;\n    });\n\n    displayProducts(filteredProducts);\n}\n\nfunction checkPrice(price, range) {\n    if (range === '0-50') return price <= 50;\n    if (range === '50-100') return price > 50 && price <= 100;\n    if (range === '100-500') return price > 100 && price <= 500;\n    if (range === '500+') return price > 500;\n    return true;\n}\n\n// Display Products\nfunction displayProducts(productsToDisplay) {\n    const grid = document.getElementById('productsGrid');\n    if (!grid) return;\n\n    grid.innerHTML = productsToDisplay.map(product => `\n        <div class=\"product-card\" onclick=\"openProductModal(${product.id})\">\n            <div class=\"product-image\">\n                ${product.emoji}\n                ${product.trending ? '<span class=\"product-badge\">TRENDING</span>' : ''}\n            </div>\n            <div class=\"product-info\">\n                <p class=\"product-category\">${product.category.replace('_', ' ')}</p>\n                <h3>${product.name}</h3>\n                <div class=\"product-rating\">⭐ ${product.rating} (${product.reviews} reviews)</div>\n                <div class=\"product-price\">\n                    <span class=\"price\">$${product.price}</span>\n                    ${product.price < product.originalPrice ? `\n                        <span class=\"original-price\">$${product.originalPrice}</span>\n                        <span class=\"discount\">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>\n                    ` : ''}\n                </div>\n                <button onclick=\"event.stopPropagation(); addToCartDirect(${product.id})\">Add to Cart 🛒</button>\n            </div>\n        </div>\n    `).join('');\n}\n\nfunction displayTrending() {\n    const trendingContainer = document.getElementById('trendingGrid');\n    if (!trendingContainer) return;\n\n    const trendingProducts = products.filter(p => p.trending);\n    trendingContainer.innerHTML = trendingProducts.map(product => `\n        <div class=\"trending-card\" onclick=\"openProductModal(${product.id})\">\n            <div style=\"background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 100%; height: 350px; display: flex; align-items: center; justify-content: center; font-size: 5em;\">\n                ${product.emoji}\n            </div>\n            <div class=\"trending-overlay\">\n                <h4>${product.name}</h4>\n                <div style=\"margin-bottom: 10px;\">⭐ ${product.rating}</div>\n                <div class=\"trending-price\">$${product.price}</div>\n            </div>\n        </div>\n    `).join('');\n}\n\n// Product Modal\nfunction openProductModal(id) {\n    selectedProduct = products.find(p => p.id === id);\n    currentQuantity = 1;\n\n    document.getElementById('modalImage').textContent = selectedProduct.emoji;\n    document.getElementById('modalImage').style.fontSize = '5em';\n    document.getElementById('modalImage').style.display = 'flex';\n    document.getElementById('modalImage').style.alignItems = 'center';\n    document.getElementById('modalImage').style.justifyContent = 'center';\n    document.getElementById('modalTitle').textContent = selectedProduct.name;\n    document.getElementById('modalCategory').textContent = selectedProduct.category.replace('_', ' ');\n    document.getElementById('modalRating').textContent = `⭐ ${selectedProduct.rating} (${selectedProduct.reviews} reviews)`;\n    document.getElementById('modalDescription').textContent = selectedProduct.description;\n    document.getElementById('modalPrice').textContent = `$${selectedProduct.price}`;\n    document.getElementById('modalDiscount').textContent = selectedProduct.price < selectedProduct.originalPrice ? `-${Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%` : '';\n    document.getElementById('quantity').value = 1;\n\n    document.getElementById('productModal').style.display = 'block';\n}\n\nfunction closeModal() {\n    document.getElementById('productModal').style.display = 'none';\n}\n\nfunction increaseQuantity() {\n    document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value) + 1;\n}\n\nfunction decreaseQuantity() {\n    const current = parseInt(document.getElementById('quantity').value);\n    if (current > 1) {\n        document.getElementById('quantity').value = current - 1;\n    }\n}\n\n// Cart Management\nfunction addToCart() {\n    if (!selectedProduct) return;\n\n    const quantity = parseInt(document.getElementById('quantity').value);\n    addItemToCart(selectedProduct, quantity);\n    closeModal();\n}\n\nfunction addToCartDirect(id) {\n    const product = products.find(p => p.id === id);\n    addItemToCart(product, 1);\n}\n\nfunction addItemToCart(product, quantity) {\n    const existingItem = cart.find(item => item.id === product.id);\n\n    if (existingItem) {\n        existingItem.quantity += quantity;\n    } else {\n        cart.push({ ...product, quantity });\n    }\n\n    saveCart();\n    updateCartUI();\n    showNotification(`${product.name} added to cart!`);\n}\n\nfunction removeFromCart(id) {\n    cart = cart.filter(item => item.id !== id);\n    saveCart();\n    updateCartUI();\n}\n\nfunction updateCartUI() {\n    const cartCount = document.getElementById('cartCount');\n    const cartEmpty = document.getElementById('cartEmpty');\n    const cartItems = document.getElementById('cartItems');\n    const cartList = document.getElementById('cartList');\n\n    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);\n    cartCount.textContent = totalItems;\n\n    if (cart.length === 0) {\n        cartEmpty.style.display = 'block';\n        cartItems.style.display = 'none';\n    } else {\n        cartEmpty.style.display = 'none';\n        cartItems.style.display = 'block';\n\n        cartList.innerHTML = cart.map(item => `\n            <div class=\"cart-item\">\n                <div class=\"cart-item-image\">${item.emoji}</div>\n                <div class=\"cart-item-details\">\n                    <h4>${item.name}</h4>\n                    <p>${item.category.replace('_', ' ')}</p>\n                    <p>Qty: ${item.quantity}</p>\n                </div>\n                <div class=\"cart-item-price\">$${(item.price * item.quantity).toFixed(2)}</div>\n                <button class=\"cart-item-remove\" onclick=\"removeFromCart(${item.id})\">Remove</button>\n            </div>\n        `).join('');\n\n        updateCartSummary();\n    }\n}\n\nfunction updateCartSummary() {\n    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);\n    const shipping = 5;\n    const tax = subtotal * 0.1;\n    const total = subtotal + shipping + tax;\n\n    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;\n    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;\n    document.getElementById('total').textContent = `$${total.toFixed(2)}`;\n}\n\nfunction clearCart() {\n    if (confirm('Are you sure you want to clear your cart?')) {\n        cart = [];\n        saveCart();\n        updateCartUI();\n    }\n}\n\nfunction checkout() {\n    if (cart.length === 0) return;\n    alert('🎉 Thank you for your purchase! Order confirmed!');\n    cart = [];\n    saveCart();\n    updateCartUI();\n    showSection('shop');\n}\n\n// Local Storage\nfunction saveCart() {\n    localStorage.setItem('trendhub_cart', JSON.stringify(cart));\n}\n\nfunction loadCart() {\n    const saved = localStorage.getItem('trendhub_cart');\n    if (saved) {\n        cart = JSON.parse(saved);\n        updateCartUI();\n    }\n}\n\n// Navigation\nfunction showSection(sectionId) {\n    document.querySelectorAll('.section').forEach(section => {\n        section.classList.remove('active');\n    });\n    document.getElementById(sectionId).classList.add('active');\n    window.scrollTo(0, 0);\n}\n\n// Notification\nfunction showNotification(message) {\n    const notification = document.createElement('div');\n    notification.style.cssText = `\n        position: fixed;\n        top: 80px;\n        right: 20px;\n        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n        color: white;\n        padding: 15px 25px;\n        border-radius: 8px;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n        z-index: 3000;\n        animation: slideIn 0.3s ease;\n    `;\n    notification.textContent = message;\n    document.body.appendChild(notification);\n\n    setTimeout(() => notification.remove(), 3000);\n}\n\n// Close modal when clicking outside\nwindow.onclick = function(event) {\n    const modal = document.getElementById('productModal');\n    if (event.target == modal) {\n        modal.style.display = 'none';\n    }\n};