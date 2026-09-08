# 🔥 TrendHub - Gen Z & Gen Alpha Shopping Platform

> The #1 marketplace for trending products loved by Gen Z and Gen Alpha

## Features

✨ **Trendy Product Selection**
- Electronics (iPhones, laptops, gaming consoles)
- Fashion (sneakers, hoodies, streetwear)
- Gaming (PS5, Nintendo Switch, gaming chairs)
- Accessories (headphones, smartwatches, more)

🛍️ **Smart Shopping Experience**
- Search by product name
- Filter by category
- Filter by price range
- Real-time product previews
- Trending section to discover hot products

🛒 **Cart Management**
- Add/remove items instantly
- Quantity selector
- Automatic price calculation
- Tax and shipping included
- Local storage persistence

💰 **Pricing System**
- Discounted prices on selected items
- Automatic tax calculation (10%)
- Flat shipping fee ($5)
- Real-time total updates

📱 **Fully Responsive**
- Works on desktop, tablet, mobile
- Touch-friendly interface
- Optimized for all screen sizes

## Quick Start

1. Open `index.html` in your browser
2. Browse products or search for specific items
3. Click on any product to see details
4. Add items to your cart
5. View cart and checkout

## Product Categories

### 📱 Electronics
- iPhone 15 Pro - $999
- MacBook Pro 14" - $1999
- Samsung Galaxy S24 - $799

### 👕 Fashion
- Air Jordan 1 Retro - $150
- Supreme Hoodie - $158
- Vintage Oversized Tee - $45

### 🎮 Gaming
- PlayStation 5 - $499
- Nintendo Switch OLED - $349
- Gaming Chair RGB - $299

### 🎧 Accessories
- Sony WH-1000XM5 - $399
- Apple Watch Series 9 - $399
- Airpods Pro Max - $549

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Full app logic
- **Local Storage** - Persistent cart data

## How It Works

### Search & Filter
```javascript
// Real-time search across product names
filerProducts() // Called on every input change
```

### Add to Cart
```javascript
addItemToCart(product, quantity)
// Adds item to cart or increases quantity if exists
```

### Cart Persistence
```javascript
saveCart()  // Saves to localStorage
loadCart()  // Loads on page refresh
```

### Price Calculation
```
Subtotal = Sum of (price × quantity) for all items
Tax = Subtotal × 10%
Shipping = $5 (flat)
Total = Subtotal + Tax + Shipping
```

## Customization

### Add New Products

Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 13,
        name: "Your Product",
        category: "electronics", // or fashion, gaming, accessories
        price: 299,
        originalPrice: 349,
        emoji: "📦",
        rating: 4.8,
        reviews: 100,
        description: "Product description here",
        trending: true // Mark as trending if you want
    }
];
```

### Change Colors

Edit the gradient in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Tax Rate

In `script.js`, change the tax calculation:

```javascript
const tax = subtotal * 0.15; // Change 0.1 to your desired rate
```

## Features Explained

### Home Section
- Hero banner with CTA
- Quick category browsing
- Easy navigation to shop

### Shop Section
- Grid view of all products
- Real-time search
- Multi-filter capability
- Quick add to cart
- Detailed product modal

### Trending Section
- Featured products carousel
- Rating display
- Quick access to trending items

### Cart Section
- Item list with quantities
- Remove functionality
- Real-time calculations
- Checkout button
- Cart clearing option

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Local Storage

The app uses browser's local storage to persist cart data:
- Key: `trendhub_cart`
- Format: JSON array
- Persists across sessions
- Clears when manually removed

## Performance

- Lightweight: No external dependencies
- Fast filtering with vanilla JavaScript
- Smooth animations with CSS
- Optimized for mobile devices

## Future Enhancements

- User authentication
- Wishlist feature
- Payment integration
- Order history
- Review system
- Recommendation engine
- Real-time inventory
- Multi-currency support

## Tips for Users

1. **Quick Shopping** - Use search for faster product discovery
2. **Trending** - Check trending section for hot deals
3. **Cart Persistence** - Your cart is saved automatically
4. **Notifications** - Watch for confirmation messages
5. **Categories** - Click category cards on home for quick filter

## Troubleshooting

### Cart not saving?
- Check if local storage is enabled in browser
- Clear browser cache and try again

### Products not showing?
- Refresh the page
- Check browser console for errors

### Filter not working?
- Ensure category names match exactly
- Try clearing search box

## License

MIT License - Feel free to use and modify!

---

🔥 Made for Gen Z & Gen Alpha - Shop with style! 🛍️