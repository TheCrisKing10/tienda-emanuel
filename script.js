/// LISTA DE PRECIOS FINALIZADO EL 12/SEPTIEMBRE/2025

// Definición de productos SIN ID (se asignan después)
let products = [
    // ======================
    // 🚬 CATEGORÍA: CIGARROS
    // ======================
    { name: "Benson Crystal Violet 20's", price: 76.00, piecesPerPackage: 10, image: "benson-crystal-violet.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Camel Yellow 20's", price: 78.00, piecesPerPackage: 10, image: "camel-yellow.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Azul 20's", price: 34.00, piecesPerPackage: 10, image: "link-azul.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Negro 20's", price: 32.00, piecesPerPackage: 10, image: "link-negro.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Rojo 20's", price: 32.00, piecesPerPackage: 10, image: "link-rojo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Rojo 20's", price: 80.00, piecesPerPackage: 10, image: "marlboro-rojo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Chester 25's", price: 73.00, piecesPerPackage: 8, image: "marlboro-chesterfield.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Mentolado 20's", price: 80.00, piecesPerPackage: 10, image: "marlboro-mentolado.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Clavo 20's", price: 83.00, piecesPerPackage: 10, image: "marlboro-clavo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Chicle 20's", price: 75.00, piecesPerPackage: 10, image: "marlboro-chicle.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Guayaba 20's", price: 75.00, piecesPerPackage: 10, image: "marlboro-guayaba.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Sandía 20's", price: 75.00, piecesPerPackage: 10, image: "marlboro-sandia.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Durazno 20's", price: 80.00, piecesPerPackage: 10, image: "marlboro-durazno.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Ruby 20's", price: 80.00, piecesPerPackage: 10, image: "marlboro-ruby.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Alaska 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-alaska.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Pepino 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-pepino.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Cereza 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-cereza.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Manzana 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-manzana.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Platano 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-platano.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Iceland 20's", price: 75.00, piecesPerPackage: 10, image: "pall mall-iceland.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Shots 14's", price: 34.00, piecesPerPackage: 10, image: "shots-14.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Shots 20's", price: 48.00, piecesPerPackage: 10, image: "shots-20.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Shots 25's", price: 55.00, piecesPerPackage: 8, image: "shots-25.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Encendedor Tokai", price: 120.00, piecesPerPackage: 1, image: "tokai.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },

    // ========================
    // 🥤 CATEGORÍA: COCA-COLA
    // ========================
    { name: "Coca-Cola 3L Ret (6 pack) Preciada", price: 178.00, piecesPerPackage: 6, image: "coca-cola 3l ret.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.25L Ret (8 pack) Preciada", price: 136.00, piecesPerPackage: 8, image: "coca-cola 1.25l ret.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 500ml Ret (24 pack)", price: 318.00, piecesPerPackage: 24, image: "coca-cola 500ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Valle Frut 2.5L Ret (8 pack)", price: 224.00, piecesPerPackage: 8, image: "valle frut 2.5l ret.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 3L (4 pack)", price: 156.00, piecesPerPackage: 4, image: "coca-cola 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.75L (4 pack)", price: 111.00, piecesPerPackage: 4, image: "coca-cola 1.75l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.75L (8 pack)", price: 223.00, piecesPerPackage: 8, image: "coca-cola 1.75l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.35L (6 pack)", price: 140.00, piecesPerPackage: 6, image: "coca-cola 1.35l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 600ml (24 pack)", price: 424.00, piecesPerPackage: 24, image: "coca-cola 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 400ml (12 pack)", price: 159.00, piecesPerPackage: 12, image: "coca-cola 400ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Choby (12 pack)", price: 126.00, piecesPerPackage: 12, image: "coca-cola 355ml choby.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Lata (12 pack)", price: 212.00, piecesPerPackage: 12, image: "coca-cola 355ml lata.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 3L Zero (4 pack)", price: 149.00, piecesPerPackage: 4, image: "coca-cola 3l zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 600ml Zero (12 pack)", price: 159.00, piecesPerPackage: 12, image: "coca-cola 600ml zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Zero Choby (12 pack)", price: 74.00, piecesPerPackage: 12, image: "coca-cola 355ml choby zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fizz Mezcla 235ml Lata (12 pack)", price: 80.00, piecesPerPackage: 12, image: "fizz mezcla.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fanta 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "fanta 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fresca 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "fresca 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sidral Mundet 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "sidral mundet 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sprite 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "sprite 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Valle Frut 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "valle frut 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Delaware Punch 2L (4 pack)", price: 88.00, piecesPerPackage: 4, image: "delaware 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Mundet Ameyal 2L (4 pack)", price: 87.50, piecesPerPackage: 4, image: "sidral ameyal 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Mundet Manzana 2L (4 pack)", price: 87.50, piecesPerPackage: 4, image: "sidral manzana 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Predator Gold Strike 473ml (6 pack)", price: 100.00, piecesPerPackage: 6, image: "predator energy 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Predator Purple Rain 473ml (6 pack)", price: 100.00, piecesPerPackage: 6, image: "predator energy purple 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Monster Green 473ml (4 pack)", price: 124.00, piecesPerPackage: 4, image: "monster energy zero 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Monster White 473ml (4 pack)", price: 124.00, piecesPerPackage: 4, image: "monster energy zero ultra 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Entera 1L (6 pack)", price: 159.00, piecesPerPackage: 6, image: "santa clara entera 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Deslactosada 1L (6 pack)", price: 164.00, piecesPerPackage: 6, image: "santa clara deslactosada 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Fresa 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara fresa 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Vainilla 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara vainilla 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Chocolate 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara chocolate 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Capuccino 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara capuccino 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Tubi-Papa Original (10 pack)", price: 160.50, piecesPerPackage: 10, image: "papa sol original.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Tubi-Papa Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "papa sol enchilado.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Tubi-Papa No Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "papa sol no enchilado.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Isadora Refritos Bayos 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos bayos.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Isadora Refritos Negros 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos negros.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Isadora Refritos Peruanos 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos peruanos.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },

    // ========================
    // 🥤 CATEGORÍA: JARRITOS
    // ========================
    { name: "Red Cola 3L (8 pack)", price: 221.00, piecesPerPackage: 8, image: "red cola 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Red Cola 2L (8 pack)", price: 166.00, piecesPerPackage: 8, image: "red cola 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Red Cola 600ml (24 pack)", price: 284.00, piecesPerPackage: 24, image: "red cola 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Limón (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos limon 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Mandarina (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos mandarina 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Manzana (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos manzana 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Piña (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos piña 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Tamarindo (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos tamarindo 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Toronja (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos toronja 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Tutifruti (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos tutifruti 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos Uva (8 pack)", price: 151.00, piecesPerPackage: 8, image: "jarritos uva 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Mineralita 2L (8 pack)", price: 96.00, piecesPerPackage: 8, image: "mineralita 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Mineralita 600ml (24 pack)", price: 173.00, piecesPerPackage: 24, image: "mineralita 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch 10L (3 pack)", price: 85.00, piecesPerPackage: 3, image: "skarch 10l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Sabor 1.5L (12 pack)", price: 114.00, piecesPerPackage: 12, image: "skarch sabores 1.5l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 1.5L (12 pack)", price: 104.00, piecesPerPackage: 12, image: "skarch 1.5l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 1L (12 pack)", price: 100.00, piecesPerPackage: 12, image: "skarch 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 600ml (24 pack)", price: 136.00, piecesPerPackage: 24, image: "skarch 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 330ml (24 pack)", price: 85.00, piecesPerPackage: 24, image: "skarch 330ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Leche Sabrolé 330ml (6 pack)", price: 79.00, piecesPerPackage: 6, image: "leche sabrolé 900ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
];

// ==========================
// Asignar IDs Automáticamente
// ==========================
products = products.map((p, index) => ({ id: 101 + index, ...p }));

// ==========================
// LÓGICA DE LA APP (igual que antes)
// ==========================
let cart = [];

const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const searchInput = document.getElementById('search-input');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryFilter = document.getElementById('category-filter');

function formatPrice(number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderCart();
});

function renderProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        let pricePerPiece;
        if (product.calcType === "multiply") {
            pricePerPiece = product.price * product.piecesPerPackage;
        } else {
            pricePerPiece = product.price / product.piecesPerPackage;
        }

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="imagenes/${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${formatPrice(product.price)}</p>
                ${product.piecesPerPackage > 1 ? `<p class="price-per-piece">$${formatPrice(pricePerPiece)} / ${product.unitLabel}</p>` : ''}
                <div class="quantity-control-product" data-id="${product.id}">
                    <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                    <span class="quantity" data-id="${product.id}">${quantity}</span>
                    <button class="quantity-btn increase" data-id="${product.id}">+</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    const sortedCart = cart.sort((a, b) => a.id - b.id);

    if (sortedCart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío.</p>';
        totalElement.textContent = '$0,00';
        return;
    }

    sortedCart.forEach(item => {
        let pricePerPiece;
        if (item.calcType === "multiply") {
            pricePerPiece = item.price * item.piecesPerPackage;
        } else {
            pricePerPiece = item.price / item.piecesPerPackage;
        }

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="imagenes/${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <p class="cart-item-price">$${formatPrice(item.price * item.quantity)}</p>
                ${item.piecesPerPackage > 1 ? `<p class="cart-item-per-piece">$${formatPrice(pricePerPiece)} / ${item.unitLabel}</p>` : ''}
            </div>
            <div class="quantity-control">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalElement.textContent = `$${formatPrice(total)}`;
}

function handleCart(event) {
    const target = event.target;
    const id = parseInt(target.dataset.id);
    if (!id) return;

    const product = products.find(p => p.id === id);
    let cartItem = cart.find(item => item.id === id);

    if (target.classList.contains('increase')) {
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    } else if (target.classList.contains('decrease')) {
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity--;
        } else if (cartItem && cartItem.quantity === 1) {
            cart = cart.filter(item => item.id !== id);
        }
    } else if (target.classList.contains('remove-item-btn')) {
        cart = cart.filter(item => item.id !== id);
    }
    
    // ❌ Antes: renderProducts(products);
    // ✅ Ahora:
    filterProducts();
    renderCart();
}


function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = (category === "all" || product.category === category);
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function generateTicket() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos para generar un ticket.");
        return;
    }

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-style');
    ticketContainer.style.width = '430px';
    ticketContainer.style.padding = '1rem';
    ticketContainer.style.fontFamily = 'monospace';
    ticketContainer.style.backgroundColor = '#fff';
    ticketContainer.style.color = '#000';
    ticketContainer.style.border = '2px dashed #000';
    ticketContainer.style.margin = '20px auto';
    ticketContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';

    const sortedCartForTicket = cart.sort((a, b) => a.id - b.id);
    
    let ticketContent = `
        <h2 style="text-align: center; margin-bottom: 1rem; text-transform: uppercase; font-size: 1.2rem;">Pedido</h2>
        <p style="text-align: center; font-size: 0.8rem; margin-bottom: 1rem;">Ticket de Compra</p>
        <div style="border-top: 1px dashed #000; padding-top: 1rem;">
            ${sortedCartForTicket.map(item => `
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <img src="imagenes/${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                    <div style="flex-grow: 1;">
                        <p style="font-weight: bold; margin: 0;">${item.name}</p>
                        <p style="margin: 0; font-size: 0.9rem;">Cantidad: ${item.quantity} x $${formatPrice(item.price)}</p>
                    </div>
                    <p style="font-weight: bold; margin: 0;">$${formatPrice(item.price * item.quantity)}</p>
                </div>
            `).join('')}
        </div>
        <div style="border-top: 1px dashed #000; margin-top: 1rem; padding-top: 1rem;">
            <p style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
                <span>Total:</span><span>${totalElement.textContent}</span>
            </p>
        </div>
        <p style="text-align: center; margin-top: 1rem; font-size: 0.8rem;">¡Gracias por tu compra!</p>
    `;
    ticketContainer.innerHTML = ticketContent;
    document.body.appendChild(ticketContainer);

    html2canvas(ticketContainer, { scale: 3 }).then(canvas => {
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = 'ticket.png';
        link.click();
        document.body.removeChild(ticketContainer);
    });
}

productsContainer.addEventListener('click', handleCart);
cartItemsContainer.addEventListener('click', handleCart);
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
checkoutBtn.addEventListener('click', generateTicket);
