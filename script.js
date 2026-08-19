/// LISTA DE PRECIOS FINALIZADO EL 18/AGOSTO/2026

import { Cigarros } from './productos/cigarros.js';
import { Cigarros20260818 } from './productos/cigarros-2026-08-18.js';
import { CocaCola } from './productos/coca-cola.js';
import { CocaCola20260803 } from './productos/coca-cola-2026-08-03.js';
import { CocaCola20260818 } from './productos/coca-cola-2026-08-18.js';
import { Jarritos } from './productos/jarritos.js';
import { Sabritas } from './productos/sabritas.js';
import { Bimbo } from './productos/bimbo.js';
import { Marinela } from './productos/marinela.js';
import { TiaRosa } from './productos/tia-rosa.js';

// Unimos todos los productos
let products = [
    ...Cigarros,
    ...Cigarros20260818,
    ...CocaCola,
    ...CocaCola20260803,
    ...CocaCola20260818,
    ...Jarritos,
    ...Sabritas,
    ...Bimbo,
    ...Marinela,
    ...TiaRosa
];

// Asignar IDs automáticamente (igual que antes)
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

    // 1. Agrupar los productos por categoría
    const categoriesGroup = {};
    cart.forEach(item => {
        if (!categoriesGroup[item.category]) {
            categoriesGroup[item.category] = [];
        }
        categoriesGroup[item.category].push(item);
    });

    // 2. Construir el contenido del ticket iterando por categorías
    let ticketContent = `
        <h2 style="text-align: center; margin-bottom: 1rem; text-transform: uppercase; font-size: 1.2rem;">TIENDA EMANUEL</h2>
        <p style="text-align: center; font-size: 0.8rem; margin-bottom: 1rem;">CREMERÍA Y ABARROTES - PEDIDO</p>
        <div style="border-top: 1px dashed #000; padding-top: 1rem;">
    `;

    for (const category in categoriesGroup) {
        // Ordenar los productos dentro de la categoría por ID (opcional, mantiene tu lógica)
        categoriesGroup[category].sort((a, b) => a.id - b.id);

        // Añadir el separador/título de la categoría
        ticketContent += `
            <div style="margin-top: 1rem; margin-bottom: 0.5rem; border-bottom: 1px solid #000; padding-bottom: 2px;">
                <span style="font-weight: bold; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px;">
                    ⚫ ${category}
                </span>
            </div>
        `;

        // Añadir los productos pertenecientes a esta categoría
        ticketContent += categoriesGroup[category].map(item => `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <img src="imagenes/${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                <div style="flex-grow: 1;">
                    <p style="font-weight: bold; margin: 0;">${item.name}</p>
                    <p style="margin: 0; font-size: 0.9rem;">Cantidad: ${item.quantity} x $${formatPrice(item.price)}</p>
                </div>
                <p style="font-weight: bold; margin: 0;">$${formatPrice(item.price * item.quantity)}</p>
            </div>
        `).join('');
    }

    ticketContent += `
        </div>
        <div style="border-top: 1px dashed #000; margin-top: 1rem; padding-top: 1rem;">
            <p style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
                <span>Total:</span><span>${totalElement.textContent}</span>
            </p>
        </div>
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
