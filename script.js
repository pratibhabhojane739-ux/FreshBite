let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    displayCart();
  
}
