// data to map
const faceCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
    id: 201,
    originalPrice: 325,
    discountedPrice: 276,
    name: "Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
    id: 202,
    originalPrice: 1309,
    discountedPrice: 113,
    name: "Daily Glow Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
    id: 203,
    originalPrice: 1175,
    discountedPrice: 999,
    name: "Deep Pore Cleansing Regime",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
    id: 204,
    originalPrice: 229,
    discountedPrice: 195,
    name: "Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
    id: 205,
    originalPrice: 399,
    discountedPrice: 339,
    name: "Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
    id: 206,
    originalPrice: 448,
    discountedPrice: 380,
    name: "Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
  },
];

// append to this div
let faceCareContainer = document.getElementById("faceCareContainer");
const cartCount = document.getElementById("cartCount");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.innerText = cart.length;

faceCareData.map((ele) => {
  const productBody = document.createElement("div");
  const image = document.createElement("img");
  image.src = ele.img;
  const name = document.createElement("p");
  name.innerText = ele.name;
  const originalPrice = document.createElement("p");
  originalPrice.innerText = ele.originalPrice;
  originalPrice.style.textDecoration = "line-through";
  const discountedPrice = document.createElement("p");
  discountedPrice.innerText = ele.discountedPrice;
  const addToCart = document.createElement("button");
  addToCart.innerText = "Add to Cart";
  addToCart.addEventListener("click", () => {
    cart.push(ele);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.innerText = cart.length;
  });
  productBody.append(image, name, originalPrice, discountedPrice, addToCart);
  faceCareContainer.append(productBody);
});
