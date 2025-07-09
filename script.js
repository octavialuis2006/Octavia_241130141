const products = [
  {
    name: "Backpack",
    color: "Cream",
    price: 20,
    img: "https://via.placeholder.com/80?text=Cream",
  },
  {
    name: "Backpack",
    color: "Black",
    price: 85,
    img: "https://via.placeholder.com/80?text=Black",
  },
  {
    name: "Backpack",
    color: "Grey",
    price: 150,
    img: "https://via.placeholder.com/80?text=Grey",
  },
  {
    name: "Backpack",
    color: "Pink",
    price: 60,
    img: "https://via.placeholder.com/80?text=Pink",
  },
];

let cart = Array(products.length).fill(1);

const renderProducts = () => {
  document.getElementById("products").innerHTML = products
    .map(
      (p, i) => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <p>${p.name}</p><p>One size</p><p>${p.color}</p>
      </div>
      <div class="qty-control">
        <button onclick="changeQty(${i}, -1)">-</button>
        <span id="qty-${i}">${cart[i]}</span>
        <button onclick="changeQty(${i}, 1)">+</button>
      </div>
      <div class="price">$<span id="price-${i}">${
        p.price * cart[i]
      }</span></div>
    </div>
  `
    )
    .join("");
  updateTotal();
};

const changeQty = (i, d) => {
  cart[i] = Math.max(0, cart[i] + d);
  document.getElementById(`qty-${i}`).textContent = cart[i];
  document.getElementById(`price-${i}`).textContent =
    cart[i] * products[i].price;
  updateTotal();
};

const updateTotal = () => {
  document.getElementById("total").textContent = cart.reduce(
    (t, q, i) => t + q * products[i].price,
    0
  );
};

const applyForm = () => {
  const fields = ["name", "email", "phone"].map((id) =>
    document.getElementById(id)
  );
  let valid = true;

  fields.forEach((f) => {
    if (f.value.trim() === "" || (f.id === "email" && !f.value.includes("@"))) {
      f.style.borderColor = "red";
      valid = false;
    } else f.style.borderColor = "#aaa";
  });

  alert(
    valid
      ? "Form berhasil diterapkan!"
      : "Mohon lengkapi semua kolom dengan benar."
  );
};

renderProducts();
