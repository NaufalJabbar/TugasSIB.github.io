const menu = [
    { name: "burger", price: 10, image: "assets/img/burger.jpg" },
    { name: "chicken crispy", price: 8, image: "assets/img/KFC.jpeg" },
    { name: "Soup MCD", price: 12, image: "assets/img/soup.jpeg" },
    { name: "McFlurry", price: 9, image: "assets/img/McFlurry.jpeg" },
    { name: "McFlurry Oreo", price: 15, image: "assets/img/McFlurryOreo.jpeg" }
  ];
  
  const menuContainer = document.getElementById("menu");
  const cartItemsContainer = document.getElementById("cart-items");
  let totalPrice = 0;
  
  function addToCart(item) {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(li);
    totalPrice += item.price;
    document.getElementById("total-price").textContent = `Total: $${totalPrice}`;
  }
  
  function checkout() {
    alert(`Total pembelian: $${totalPrice}`);
  }
  
  menu.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><br>${item.name} - $${item.price}`;
    menuItem.addEventListener("click", () => {
      addToCart(item);
    });
    menuContainer.appendChild(menuItem);
  });
  