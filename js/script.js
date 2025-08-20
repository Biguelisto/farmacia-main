// Dados dos produtos
const products = [
            { id: 1, name: "Paracetamol 500mg 10 comprimidos", price: 8.99, image: "https://cdn1.staticpanvel.com.br/produtos/15/105567-15.jpg?ims=424x" },
            { id: 2, name: "Dipirona Sódica 500mg 10 comprimidos", price: 6.50, image: "https://promofarma.vtexassets.com/arquivos/ids/172457/Captura-de-tela-2024-05-24-154053.png?v=638521728895100000" },
            { id: 3, name: "Ibuprofeno 400mg 10 comprimidos", price: 12.90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hAYJeK41lEVgrTnyoM9BdRBSZlLDBorHGQ&s" },
            { id: 4, name: "Omeprazol 20mg 14 cápsulas", price: 15.75, image: "https://product-data.raiadrogasil.io/images/14966168.webp" },
            { id: 5, name: "Dorflex 10 comprimidos", price: 9.80, image: "https://drogariasp.vteximg.com.br/arquivos/ids/1113365-1000-1000/59790---Dorflex-Analgesico-e-Relaxante-Muscular-10-comprimidos_0003_Layer-1.png?v=638525165409700000" },
            { id: 6, name: "Neosaldina 10 comprimidos", price: 18.30, image: "data:image/jpeg;base64,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u8g6RtabjL1C461GUpto9fCYyFOkotPtNONhqoagxfSO91Z9HmdPtClwZX+JFX8aP6R3upzE+JHT6XB+vModiKv40f0jvdTmJ8R0+lwfyH8SKv40ev8AeO91TzE+I6fS4P5AbD1fxo/pHe6nMT4jp9Lg/kV/iRV/Gj14/CO1/wDio5ifEdPpcH8io2Iq/jR/SO91OYnxHT6XB/ItdsVWDUGK/wAq4f8A5UrDy4j2hS4P5GJ2xdfe4MI8d48n25VZYfvHtCnwfyML9hq93GSL6V3S3xVZULbEdPp8H8iw9n1YTcuhJ6mR3uqeaY6dT4P5F7ez+r6w/SO91V5mQ6fT4MzM2Cqhzi+e73VV0JcSy5Qp8GZn7E1Yacu5zcrvdYePmqFhnfVl/aVNLRM1DuzqtJuXQ3PPeO9xdKgZe0KfB+vMs+5vW/Gg+kd7iZGPaFPgzJH2cVY/Ch+kdb9FTkJ6fT4Mzfc9rPjQ/SO91TkHtCnwZT7nlX1h+kd7qZR7Qp8H68y+LYGtYbtdCD1zu9xMpDx9JqzT9eZnbsbiAv8ACQ6i3nHQDgB3NOno0TKyvS6P7X68wNjcQH/Fi+efcTKx0uj+1+vMwzbBVrzdzoSbW88jT1MTKyyx1JaJP15nXdmuzU1FJM6UsIe1gGRxPBzib3A6q0VY4sdiY1VFR7L/AGO+VjzggCAICBVDvn1fYqs1jsYrKLE3K+pLAp6ksCvqQD1IB6kA9SAepALeCArYdEBaWISU3aAZUFy4BCblj41KIZQRqSLlz4rBQRmLWi6kZipYha5VrEIuX5D4IRcZT/v1oLoo6I2v/vl+9AmZqAan0KSsyahQIAgCAiTt7x/3yVWXjsWNZqhNy50YvbXipIuyu44+HBLDMBDwPLmguUEVxcJYXK7ka66BLC7KujBtbQFBexQxCxtfRLC4dGB1/YgTG7A439SgXYEVwCEsMxR7LGyEplMqE3KZEBXKhNyrWWF1JVsw5UKlWt1QGWViFjGAgK5UAyoCpugMtKLEqSsiShUIAgCAwSN1UFkUDUJLnetCCpPH0IRYoOFvahIZogKDnfmgK9PBAU6+KAq7XqgBF0AZogZbZCbjKoFxlQFcqC5cApBiyIQMiEl5GiEFmRCSuRAMqkXGVAZIQhVmVCAgCAIC0hCSmVAMqAZUAyoBlQDKgGVALIBlQCyAWQCyAWQCyAWQFbKAULVIGVALIBlQDKgGVAMqAq0IQXIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID/9k=" },
            { id: 7, name: "Band-Aid Caixa com 30 unidades", price: 14.20, image: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/21988/medium/curativo-band-aid-aquablock-30-unidades_14998.jpg" },
            { id: 8, name: "Protetor Solar FPS 50 120ml", price: 45.90, image: "https://drogariascampea.vtexassets.com/arquivos/ids/167372-800-800?v=638126663437130000&width=800&height=800&aspect=true" },
            { id: 9, name: "Sabonete Líquido Antibacteriano 250ml", price: 12.40, image: "https://drogariasp.vteximg.com.br/arquivos/ids/529669-1000-1000/146013---sabonete-liquido-antibacteriano-corporal-protex-balance-250ml.jpg?v=637792349965300000" },
            { id: 10, name: "Shampoo Anticaspa 200ml", price: 22.50, image: "https://product-data.raiadrogasil.io/images/13158341.webp" },
            { id: 11, name: "Condicionador Hidratante 200ml", price: 24.90, image: "https://acdn-us.mitiendanube.com/stores/003/130/602/products/9-c479078fd3c9ff4ecc17110314535466-640-0.png" },
            { id: 12, name: "Creme Dental 90g", price: 4.99, image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1131498-800-450?v=638463595222500000&width=800&height=450&aspect=true" }
        ];

// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentOrder = JSON.parse(localStorage.getItem('currentOrder')) || null;

// Função para salvar o carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para gerar um número de senha aleatório
function generateTicketNumber() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = numbers.charAt(Math.floor(Math.random() * 10)) + 
                         numbers.charAt(Math.floor(Math.random() * 10)) + 
                         numbers.charAt(Math.floor(Math.random() * 10));
    return `${randomLetter}-${randomNumbers}`;
}

// Página de Produtos
if (document.body.classList.contains('produtos')) {
    const productGrid = document.getElementById('productGrid');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Renderizar produtos
    function renderProducts(productsToRender = products) {
        productGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<div class="no-products">Nenhum produto encontrado</div>';
            return;
        }
        
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-name">${product.name}</div>
                <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            `;
            productGrid.appendChild(productCard);
        });
        
        // Adicionar event listeners aos botões
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }
    
    // Adicionar produto ao carrinho
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        // Verificar se o produto já está no carrinho
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        
        saveCart();
        updateCart();
        
        // Feedback visual
        e.target.textContent = 'Adicionado!';
        e.target.style.backgroundColor = '#28a745';
        setTimeout(() => {
            e.target.textContent = 'Adicionar ao Carrinho';
            e.target.style.backgroundColor = '#0078d7';
        }, 1000);
    }
    
    // Atualizar carrinho
    function updateCart() {
        // Atualizar contador
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Atualizar lista de itens
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>';
            checkoutBtn.style.display = 'none';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-name">${item.name} (x${item.quantity})</div>
                    <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
                `;
                cartItems.appendChild(cartItem);
            });
            checkoutBtn.style.display = 'block';
        }
        
        // Atualizar total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
        
        // Atualizar estado do botão de checkout
        checkoutBtn.classList.toggle('disabled', cart.length === 0);
    }
    
    // Pesquisar produtos
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.trim() === '') {
            renderProducts();
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );
        
        renderProducts(filteredProducts);
    }
    
    // Event listeners
    searchButton.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Inicializar
    renderProducts();
    updateCart();
}

// Página de Checkout
if (document.body.classList.contains('checkout')) {
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    const confirmOrderBtn = document.getElementById('confirmOrder');
    
    // Carregar pedido
    function loadOrder() {
        orderItems.innerHTML = '';
        
        if (cart.length === 0) {
            orderItems.innerHTML = '<div class="empty-order">Seu carrinho está vazio</div>';
            return;
        }
        
        cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div class="order-item-name">${item.name} (x${item.quantity})</div>
                <div class="order-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            `;
            orderItems.appendChild(orderItem);
        });
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        orderTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
    
    // Confirmar pedido
    function confirmOrder() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const ticketNumber = generateTicketNumber();
        
        currentOrder = {
            items: [...cart],
            total: total,
            ticketNumber: ticketNumber,
            date: new Date().toLocaleString()
        };
        
        localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
        
        // Limpar carrinho
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Redirecionar para tela de pedido finalizado
        window.location.href = 'finalizado.html';
    }
    
    // Event listeners
    confirmOrderBtn.addEventListener('click', confirmOrder);
    
    // Inicializar
    loadOrder();
}

// Página de Pedido Finalizado
if (document.body.classList.contains('finalizado')) {
    const ticketItems = document.getElementById('ticketItems');
    const ticketTotal = document.getElementById('ticketTotal');
    const ticketNumber = document.getElementById('ticketNumber');
    
    // Carregar pedido finalizado
    function loadCompletedOrder() {
        if (!currentOrder) {
            currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
        }
        
        if (!currentOrder) {
            // Se não houver pedido, redirecionar para produtos
            window.location.href = 'produtos.html';
            return;
        }
        
        ticketItems.innerHTML = '';
        
        currentOrder.items.forEach(item => {
            const ticketItem = document.createElement('div');
            ticketItem.className = 'ticket-item';
            ticketItem.innerHTML = `
                <div class="ticket-item-name">${item.name} (x${item.quantity})</div>
                <div class="ticket-item-price">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            `;
            ticketItems.appendChild(ticketItem);
        });
        
        ticketTotal.textContent = `Total: R$ ${currentOrder.total.toFixed(2)}`;
        ticketNumber.textContent = `Senha: ${currentOrder.ticketNumber}`;
    }
    
    // Inicializar
    loadCompletedOrder();
}