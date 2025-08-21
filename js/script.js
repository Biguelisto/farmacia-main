// Dados dos produtos
const products = [
    { id: 1, name: "Paracetamol 500mg 10 comprimidos", price: 8.99, category: "Dor de cabeça", image: "https://cdn1.staticpanvel.com.br/produtos/15/105567-15.jpg?ims=424x" },
    { id: 2, name: "Dipirona Sódica 500mg 10 comprimidos", price: 6.50, category: "Dor de cabeça", image: "https://promofarma.vtexassets.com/arquivos/ids/172457/Captura-de-tela-2024-05-24-154053.png?v=638521728895100000" },
    { id: 3, name: "Ibuprofeno 400mg 10 comprimidos", price: 12.90, category: "Anti inflamatórios", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hAYJeK41lEVgrTnyoM9BdRBSZlLDBorHGQ&s" },
    { id: 4, name: "Omeprazol 20mg 14 cápsulas", price: 15.75, category: "Estômago", image: "https://product-data.raiadrogasil.io/images/14966168.webp" },
    { id: 5, name: "Dorflex 10 comprimidos", price: 9.80, category: "Dores Musculares", image: "https://drogariasp.vteximg.com.br/arquivos/ids/1113365-1000-1000/59790---Dorflex-Analgesico-e-Relaxante-Muscular-10-comprimidos_0003_Layer-1.png?v=638525165409700000" },
    { id: 7, name: "Band-Aid Caixa com 30 unidades", price: 14.20, category: "Primeiros Socorros", image: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/21988/medium/curativo-band-aid-aquablock-30-unidades_14998.jpg" },
    { id: 8, name: "Protetor Solar FPS 50 120ml", price: 45.90, category: "Cuidados Pessoais", image: "https://drogariascampea.vtexassets.com/arquivos/ids/167372-800-800?v=638126663437130000&width=800&height=800&aspect=true" },
    { id: 9, name: "Sabonete Líquido Antibacteriano 250ml", price: 12.40, category: "Higiene", image: "https://drogariasp.vteximg.com.br/arquivos/ids/529669-1000-1000/146013---sabonete-liquido-antibacteriano-corporal-protex-balance-250ml.jpg?v=637792349965300000" },
    { id: 10, name: "Shampoo Anticaspa 200ml", price: 22.50, category: "Higiene", image: "https://product-data.raiadrogasil.io/images/13158341.webp" },
    { id: 11, name: "Condicionador Hidratante 200ml", price: 24.90, category: "Higiene", image: "https://acdn-us.mitiendanube.com/stores/003/130/602/products/9-c479078fd3c9ff4ecc17110314535466-640-0.png" },
    { id: 12, name: "Creme Dental 90g", price: 4.99, category: "Higiene", image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1131498-800-450?v=638463595222500000&width=800&height=450&aspect=true" }
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

    // Variável para controlar a categoria atual
    let currentCategory = 'all';

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
    
    // Função para filtrar produtos por categoria
    function filterByCategory(category) {
        currentCategory = category;
        
        // Atualizar botão ativo
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.category-btn[data-category="${category}"]`).classList.add('active');
        
        // Filtrar produtos
        if (category === 'all') {
            renderProducts();
        } else {
            const filteredProducts = products.filter(product => 
                product.category === category
            );
            renderProducts(filteredProducts);
        }
    }
    
    // Função para pesquisar produtos (atualizada para considerar categoria)
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        
        let filteredProducts;
        
        if (currentCategory === 'all') {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
        } else {
            filteredProducts = products.filter(product => 
                product.category === currentCategory && 
                product.name.toLowerCase().includes(searchTerm)
            );
        }
        
        renderProducts(filteredProducts);
    }
    
    // Event listeners
    searchInput.addEventListener('input', searchProducts);
    
    // Adicionar event listeners para os botões de categoria
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            filterByCategory(category);
        });
    });
    
    // Inicializar
    renderProducts();
    updateCart();
    
    // Inicializar com a categoria "Todos" ativa
    document.querySelector('.category-btn[data-category="all"]').classList.add('active');
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

// ===== SISTEMA DE ADMINISTRAÇÃO =====
// Funções para gerenciar produtos e categorias no localStorage

// Utilitário para formatação monetária
const brl = (n) => (Number(n) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Helpers para produtos e categorias personalizadas
function getCustomProducts() { 
    return JSON.parse(localStorage.getItem('customProducts') || '[]'); 
}

function setCustomProducts(data) { 
    localStorage.setItem('customProducts', JSON.stringify(data)); 
}

function getCustomCategories() { 
    return JSON.parse(localStorage.getItem('customCategories') || '[]'); 
}

function setCustomCategories(data) { 
    localStorage.setItem('customCategories', JSON.stringify(data)); 
}

// Obter todos os produtos (base + personalizados)
function getAllProducts() {
    const base = [...products];
    const custom = getCustomProducts().map(p => ({ 
        ...p, 
        id: p.id || Date.now() + Math.random() 
    }));
    return [...base, ...custom];
}

// Obter todas as categorias
function getAllCategories() {
    const cats = new Set();
    
    // Adicionar categorias dos produtos base
    products.forEach(p => cats.add(p.category));
    
    // Adicionar categorias dos produtos personalizados
    getCustomProducts().forEach(p => cats.add(p.category));
    
    // Adicionar categorias personalizadas adicionais
    getCustomCategories().forEach(c => cats.add(c));
    
    return Array.from(cats);
}

// ===== PÁGINA DE ADMINISTRAÇÃO =====
if (document.body.classList.contains('admin')) {
    const addProductForm = document.getElementById('addProductForm');
    const editProductForm = document.getElementById('editProductForm');
    const adminProductList = document.getElementById('adminProductList');
    const prodCategorySelect = document.getElementById('prodCategory');
    const editProdCategorySelect = document.getElementById('editProdCategory');
    const editProductSelect = document.getElementById('editProductSelect');
    const addCategoryBtn = document.getElementById('addCategoryBtn');

    // Renderizar opções de categoria nos selects
    function renderCategoryOptions() {
        const categories = getAllCategories();
        
        // Limpar e popular select de adicionar produto
        prodCategorySelect.innerHTML = '';
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            prodCategorySelect.appendChild(option);
        });
        
        // Limpar e popular select de editar produto
        editProdCategorySelect.innerHTML = '';
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            editProdCategorySelect.appendChild(option);
        });
    }

    // Renderizar opções de produtos para edição
    function renderEditProductOptions() {
        const customProducts = getCustomProducts();
        editProductSelect.innerHTML = '';
        
        customProducts.forEach(prod => {
            const option = document.createElement('option');
            option.value = prod.id;
            option.textContent = `${prod.name} (${brl(prod.price)})`;
            editProductSelect.appendChild(option);
        });
    }

    // Preencher formulário de edição quando produto for selecionado
    editProductSelect.addEventListener('change', function() {
        const productId = this.value;
        const customProducts = getCustomProducts();
        const product = customProducts.find(p => p.id == productId);
        
        if (product) {
            document.getElementById('editProdName').value = product.name;
            document.getElementById('editProdPrice').value = product.price;
            document.getElementById('editProdImage').value = product.image;
            
            // Selecionar a categoria correta
            const categorySelect = document.getElementById('editProdCategory');
            for (let i = 0; i < categorySelect.options.length; i++) {
                if (categorySelect.options[i].value === product.category) {
                    categorySelect.selectedIndex = i;
                    break;
                }
            }
        }
    });

    // Adicionar novo produto
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newProduct = {
            id: Date.now(),
            name: document.getElementById('prodName').value,
            price: parseFloat(document.getElementById('prodPrice').value),
            category: prodCategorySelect.value,
            image: document.getElementById('prodImage').value
        };
        
        const customProducts = getCustomProducts();
        customProducts.push(newProduct);
        setCustomProducts(customProducts);
        
        alert('Produto adicionado com sucesso!');
        addProductForm.reset();
        renderAdminProductList();
        renderEditProductOptions();
    });

    // Editar produto existente
    editProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productId = editProductSelect.value;
        const customProducts = getCustomProducts();
        const productIndex = customProducts.findIndex(p => p.id == productId);
        
        if (productIndex !== -1) {
            customProducts[productIndex] = {
                id: productId,
                name: document.getElementById('editProdName').value,
                price: parseFloat(document.getElementById('editProdPrice').value),
                category: editProdCategorySelect.value,
                image: document.getElementById('editProdImage').value
            };
            
            setCustomProducts(customProducts);
            alert('Produto atualizado com sucesso!');
            editProductForm.reset();
            renderAdminProductList();
            renderEditProductOptions();
        }
    });

    // Adicionar nova categoria
    addCategoryBtn.addEventListener('click', function() {
        const newCategory = prompt('Digite o nome da nova categoria:');
        if (newCategory && newCategory.trim()) {
            const customCategories = getCustomCategories();
            if (!customCategories.includes(newCategory)) {
                customCategories.push(newCategory);
                setCustomCategories(customCategories);
                renderCategoryOptions();
                alert('Categoria adicionada com sucesso!');
            } else {
                alert('Esta categoria já existe!');
            }
        }
    });

    // Renderizar lista de produtos na administração
    function renderAdminProductList() {
        const customProducts = getCustomProducts();
        adminProductList.innerHTML = '';
        
        if (customProducts.length === 0) {
            adminProductList.innerHTML = '<p class="no-products">Nenhum produto personalizado cadastrado.</p>';
            return;
        }
        
        customProducts.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'admin-product-item';
            productDiv.innerHTML = `
                <div class="admin-product-info">
                    <img src="${product.image}" alt="${product.name}" class="admin-product-image">
                    <div>
                        <h4>${product.name}</h4>
                        <p>${brl(product.price)} - ${product.category}</p>
                    </div>
                </div>
                <button class="remove-product-btn" data-index="${index}">Remover</button>
            `;
            adminProductList.appendChild(productDiv);
        });
        
        // Adicionar event listeners para remover produtos
        document.querySelectorAll('.remove-product-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const customProducts = getCustomProducts();
                customProducts.splice(index, 1);
                setCustomProducts(customProducts);
                renderAdminProductList();
                renderEditProductOptions();
            });
        });
    }

    // Inicializar página de administração
    renderCategoryOptions();
    renderEditProductOptions();
    renderAdminProductList();
}

// ===== ATUALIZAR FUNÇÕES EXISTENTES PARA USAR getAllProducts() =====

// Na página de produtos, substitua a renderização para usar getAllProducts()
if (document.body.classList.contains('produtos')) {
    // ... código existente ...
    
    // Atualizar a função renderProducts para usar getAllProducts()
    function renderProducts(productsToRender = getAllProducts()) {
        // ... resto do código permanece igual ...
    }
    
    // Atualizar a função filterByCategory
    function filterByCategory(category) {
        currentCategory = category;
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.category-btn[data-category="${category}"]`).classList.add('active');
        
        if (category === 'all') {
            renderProducts(getAllProducts());
        } else {
            const filteredProducts = getAllProducts().filter(product => 
                product.category === category
            );
            renderProducts(filteredProducts);
        }
    }
    
    // Atualizar a função searchProducts
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        
        let filteredProducts;
        
        if (currentCategory === 'all') {
            filteredProducts = getAllProducts().filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
        } else {
            filteredProducts = getAllProducts().filter(product => 
                product.category === currentCategory && 
                product.name.toLowerCase().includes(searchTerm)
            );
        }
        
        renderProducts(filteredProducts);
    }
    
    // Atualizar a função para renderizar categorias
    function renderCategories() {
        const categoriesContainer = document.querySelector('.categories-container');
        if (!categoriesContainer) return;
        
        categoriesContainer.innerHTML = '';
        
        // Botão "Todos"
        const allButton = document.createElement('button');
        allButton.className = 'category-btn active';
        allButton.setAttribute('data-category', 'all');
        allButton.textContent = 'Todos';
        categoriesContainer.appendChild(allButton);
        
        // Botões para cada categoria
        getAllCategories().forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.setAttribute('data-category', category);
            button.textContent = category;
            categoriesContainer.appendChild(button);
        });
        
        // Adicionar event listeners
        categoriesContainer.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                filterByCategory(category);
            });
        });
    }
    
    // Inicializar categorias
    renderCategories();
}



// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = adminStyles;
document.head.appendChild(styleSheet);