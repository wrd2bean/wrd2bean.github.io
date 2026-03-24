let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
  });

  const totalEl = document.createElement("li");
  totalEl.textContent = "Total: $" + total;
  cartList.appendChild(totalEl);
}
