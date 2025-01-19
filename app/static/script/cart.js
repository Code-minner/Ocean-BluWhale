// Unique keys for each project
const cartKey = 'project2_cartItems'; // Change 'project1' to 'project2' for the second project
const totalKey = 'project2_cartTotal'; // Change 'project1' to 'project2' for the second project

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("Cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("class_quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCartButtons = document.getElementsByClassName("add_cart");
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener("click", addCartClicked);
    }

    var cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    renderCartItems(cartItems);
    updateTotal();
    updateCartIcon();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartBox = buttonClicked.closest('.cart_box');
    var id = cartBox.dataset.id;

    var cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem(cartKey, JSON.stringify(cartItems));

    cartBox.remove();
    updateTotal();
    updateCartIcon();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    var cartBox = input.closest('.cart_box');
    var id = cartBox.dataset.id;
    var cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            cartItems[i].quantity = parseInt(input.value, 10); // Ensure it's an integer
            break;
        }
    }
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    updateTotal();
    updateCartIcon();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.card');
    var id = shopProducts.dataset.id;
    var title = shopProducts.getElementsByClassName("product_title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product_img")[0].src;

    addProductToCart(id, title, price, productImg);
    updateTotal();
}


function addProductToCart(id, title, price, productImg) {
    var cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            alert("You have already added this item to the cart");
            return;
        }
    }

    var cartItem = {
        id: id,
        title: title,
        price: price,
        productImg: productImg,
        quantity: 1
    };

    cartItems.push(cartItem);
    localStorage.setItem(cartKey, JSON.stringify(cartItems));

    renderCartItems(cartItems);
    updateCartIcon();
}

function renderCartItems(cartItems) {
    var cartItemsContainer = document.getElementsByClassName("cart_content")[0];
    if (!cartItemsContainer) {
        console.error("Cart items container not found");
        return;
    }
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(cartItem => {
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add("cart_box");
        cartShopBox.dataset.id = cartItem.id;
        var cartBoxContent = `
            <div class="cart_box_sub">
            <div class="cart_img_box">
                <img src="${cartItem.productImg}" alt="" class="cart_img" onerror="this.src='default-image-url.png';"> </div>
                <div class="cart_box_subsize">
                    <div class="cart_product_title">${cartItem.title}</div>
                    <div class="cart_box_subsize_sub">
                        <input type="number" value="${cartItem.quantity}" class="class_quantity mobile_quantity" />
                        <div class="cart_price mobile_price">${cartItem.price}</div>
                    </div>
                </div>
            </div>
            <div class="details_box">
                <input type="number" value="${cartItem.quantity}" class="class_quantity desktop_quantity" />
                <div class="cart_price desktop_price">${cartItem.price}</div>
            </div>
            <i class='bx bx-trash Cart-remove'></i>`;
        cartShopBox.innerHTML = cartBoxContent;
        cartItemsContainer.append(cartShopBox);

        cartShopBox.getElementsByClassName("Cart-remove")[0].addEventListener('click', removeCartItem);
        cartShopBox.querySelectorAll(".class_quantity").forEach(input => {
            input.addEventListener('change', quantityChanged);
        });
    });
}

function updateCartIcon() {
    var cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    var totalQuantity = cartItems.reduce((acc, item) => acc + parseInt(item.quantity, 10), 0); // Ensure it's an integer

    var cartIcon = document.querySelector("#Cart_icon");
    if (cartIcon) {
        cartIcon.setAttribute("data-quantity", totalQuantity);
    } else {
        console.error("Cart icon element not found");
    }
    updateTotal();
}

function updateTotal() {
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return sum + (price * item.quantity);
    }, 0);

    localStorage.setItem(totalKey, total.toFixed(2));

    const totalElements = document.querySelectorAll('.total_price, .total_price_two, .total_price_three');
    totalElements.forEach(el => {
        if (el) el.textContent = '$' + total.toFixed(2);
    });
}




// Function to clear cart items from local storage (for testing purposes)
function clearCart() {
    localStorage.removeItem("cartItems");
    document.getElementsByClassName("cart_content")[0].innerHTML = ''; // Clear existing items from the DOM
    updateTotal();
    updateCartIcon();
}

console.log(cartData)







