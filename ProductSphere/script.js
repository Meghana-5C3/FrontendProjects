const products = [

    /* ELECTRONICS */

    {
        name:"Wireless Headphones",
        category:"electronics",
        price:1999,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Bluetooth Speaker",
        category:"electronics",
        price:2499,
        rating:4.5,
        image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Smart Watch",
        category:"electronics",
        price:3999,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Wireless Mouse",
        category:"electronics",
        price:1499,
        rating:4.4,
        image:"https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Mechanical Keyboard",
        category:"electronics",
        price:4599,
        rating:4.9,
        image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Portable SSD",
        category:"electronics",
        price:4999,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop"
    },

    /* FASHION */

    {
        name:"Fashion Hoodie",
        category:"fashion",
        price:1999,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Denim Jacket",
        category:"fashion",
        price:2999,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Casual T-Shirt",
        category:"fashion",
        price:1299,
        rating:4.3,
        image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Stylish Sunglasses",
        category:"fashion",
        price:1799,
        rating:4.5,
        image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Luxury Handbag",
        category:"fashion",
        price:4999,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Casual Shirt",
        category:"fashion",
        price:2199,
        rating:4.4,
        image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop"
    },

    /* GAMING */

    {
        name:"Gaming Mouse",
        category:"gaming",
        price:2499,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Gaming Keyboard",
        category:"gaming",
        price:3999,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"RGB Headset",
        category:"gaming",
        price:3499,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Gaming Chair",
        category:"gaming",
        price:4999,
        rating:4.9,
        image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Mouse Pad",
        category:"gaming",
        price:1199,
        rating:4.4,
        image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Gaming Controller",
        category:"gaming",
        price:4599,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop"
    },

    /* SHOES */

    {
        name:"Running Shoes",
        category:"shoes",
        price:2999,
        rating:4.5,
        image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Premium Sneakers",
        category:"shoes",
        price:4499,
        rating:4.8,
        image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Sports Shoes",
        category:"shoes",
        price:2499,
        rating:4.4,
        image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Leather Boots",
        category:"shoes",
        price:4999,
        rating:4.7,
        image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Casual Sneakers",
        category:"shoes",
        price:3599,
        rating:4.6,
        image:"https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop"
    },

    {
        name:"Training Shoes",
        category:"shoes",
        price:2799,
        rating:4.3,
        image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop"
    }

];

/* ELEMENTS */

const productsGrid =
document.getElementById("productsGrid");

const categoryBtns =
document.querySelectorAll(".category-btn");

const searchInput =
document.getElementById("searchInput");

const priceFilter =
document.getElementById("priceFilter");

const sortFilter =
document.getElementById("sortFilter");

const cartSidebar =
document.getElementById("cartSidebar");

const cartItems =
document.getElementById("cartItems");

const cartTotal =
document.getElementById("cartTotal");

const cartCount =
document.getElementById("cartCount");

const closeCart =
document.getElementById("closeCart");

const cartIcon =
document.querySelector(".cart-icon");

const toast =
document.getElementById("toast");

/* VARIABLES */

let currentCategory = "all";

let cart = [];

/* DISPLAY PRODUCTS */

function displayProducts(items){

    productsGrid.innerHTML = "";

    items.forEach((product,index) => {

        const card =
        document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="badge">

                Best Seller

            </div>

            <img src="${product.image}"
            alt="${product.name}">

            <div class="product-info">

                <h3>

                    ${product.name}

                </h3>

                <div class="category">

                    ${product.category}

                </div>

                <div class="price">

                    ₹${product.price}

                </div>

                <div class="rating">

                    ⭐ ${product.rating}

                </div>

                <button onclick="addToCart(${index})">

                    <i class="fa-solid fa-cart-shopping"></i>

                    Add to Cart

                </button>

            </div>

        `;

        productsGrid.appendChild(card);

    });

}

/* FILTER PRODUCTS */

function filterProducts(){

    let filtered =
    [...products];

    /* CATEGORY */

    if(currentCategory !== "all"){

        filtered =
        filtered.filter(product =>

            product.category === currentCategory

        );

    }

    /* SEARCH */

    const searchText =
    searchInput.value.toLowerCase();

    filtered =
    filtered.filter(product =>

        product.name.toLowerCase()
        .includes(searchText)

    );

    /* PRICE */

    const price =
    priceFilter.value;

    if(price === "1000"){

        filtered =
        filtered.filter(product =>
            product.price >= 1000 &&
            product.price <= 2000
        );

    }

    if(price === "2000"){

        filtered =
        filtered.filter(product =>
            product.price > 2000 &&
            product.price <= 3500
        );

    }

    if(price === "3500"){

        filtered =
        filtered.filter(product =>
            product.price > 3500 &&
            product.price <= 5000
        );

    }

    /* SORT */

    const sort =
    sortFilter.value;

    if(sort === "price-low"){

        filtered.sort(
            (a,b) => a.price - b.price
        );

    }

    if(sort === "price-high"){

        filtered.sort(
            (a,b) => b.price - a.price
        );

    }

    if(sort === "rating-high"){

        filtered.sort(
            (a,b) => b.rating - a.rating
        );

    }

    displayProducts(filtered);

}

/* CATEGORY BUTTONS */

categoryBtns.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            document
            .querySelector(".active")
            .classList.remove("active");

            btn.classList.add("active");

            currentCategory =
            btn.dataset.category;

            filterProducts();

        }
    );

});

/* EVENTS */

searchInput.addEventListener(
    "keyup",
    filterProducts
);

priceFilter.addEventListener(
    "change",
    filterProducts
);

sortFilter.addEventListener(
    "change",
    filterProducts
);

/* ADD TO CART */

function addToCart(index){

    const product =
    products[index];

    const existing =
    cart.find(item =>
        item.name === product.name
    );

    if(existing){

        existing.quantity++;

    }else{

        cart.push({
            ...product,
            quantity:1
        });

    }

    renderCart();

    showToast(
        `${product.name} added to cart`
    );

}

/* TOAST */

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2000);

}

/* RENDER CART */

function renderCart(){

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;

    cart.forEach((item,index) => {

        total +=
        item.price * item.quantity;

        count += item.quantity;

        const div =
        document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <img src="${item.image}">

            <div>

                <h4>

                    ${item.name}

                </h4>

                <p>

                    ₹${item.price}

                </p>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">

                        -

                    </button>

                    <span>

                        ${item.quantity}

                    </span>

                    <button onclick="increaseQuantity(${index})">

                        +

                    </button>

                </div>

                <button class="remove-btn"
                onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        `;

        cartItems.appendChild(div);

    });

    cartTotal.textContent = total;

    cartCount.textContent = count;

}

/* QUANTITY */

function increaseQuantity(index){

    cart[index].quantity++;

    renderCart();

}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    renderCart();

}

/* REMOVE */

function removeItem(index){

    cart.splice(index,1);

    renderCart();

}

/* CART OPEN */

cartIcon.addEventListener(
    "click",
    () => {

        cartSidebar.classList.add(
            "active"
        );

    }
);

/* CART CLOSE */

closeCart.addEventListener(
    "click",
    () => {

        cartSidebar.classList.remove(
            "active"
        );

    }
);

/* INITIAL */

displayProducts(products);