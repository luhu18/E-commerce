// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Sports"
    },
    {
        id: 4,
        name: "Smart Home Speaker",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1545454675-3531b54301b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Electronics"
    }
];

// Sample deals data
const deals = [
    {
        id: 1,
        title: "Summer Sale",
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        validUntil: "2024-08-31"
    },
    {
        id: 2,
        title: "Flash Sale",
        discount: "50% OFF",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        validUntil: "2024-07-15"
    }
];

// Cart functionality
let cart = [];

// Load featured products
function loadFeaturedProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
        </div>
    `).join('');
}

// Load deals
function loadDeals() {
    const dealsSlider = document.getElementById('dealsSlider');
    dealsSlider.innerHTML = deals.map(deal => `
        <div class="deal-card">
            <img src="${deal.image}" alt="${deal.title}">
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <p class="discount">${deal.discount}</p>
                <p class="valid-until">Valid until: ${deal.validUntil}</p>
            </div>
        </div>
    `).join('');
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .product-card {
        background: white;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .product-card:hover {
        transform: translateY(-5px);
    }

    .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }

    .product-card h3 {
        margin: 1rem 0;
        color: #2c3e50;
    }

    .price {
        font-size: 1.2rem;
        color: #3498db;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .add-to-cart {
        width: 100%;
        padding: 0.8rem;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .add-to-cart:hover {
        background-color: #2980b9;
    }

    .deal-card {
        min-width: 300px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .deal-card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .deal-content {
        padding: 1rem;
    }

    .discount {
        color: #e74c3c;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .valid-until {
        color: #7f8c8d;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    loadDeals();
    updateCartCount();
}); 