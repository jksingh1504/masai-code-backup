// add cart data to this div
let cartContainer = document.getElementById("cartContainer");
const cartCount = document.getElementById("cartCount");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.innerText = cart.length;
const totalItems = document.getElementById("totalItems");
totalItems.innerText = "Total items in cart:" + cart.length;

const totalAmount = document.getElementById("totalAmount");
let grandTotal = cart.reduce(
  (acc, ele) => acc + Number(ele.discountedPrice),
  0
);
totalAmount.innerText = "Total Amount :" + grandTotal;

let discount = 0;
let billAmount = document.getElementById("billAmount");
billAmount.innerText = "Bill Amount : " + grandTotal * (1 - discount);

function applyCoupon() {
  const couponCode = document.getElementById("coupon").value;
  if (couponCode === "Masai15") {
    discount = 0.15;
    billAmount.innerText =
      "Bill Amount : " + (grandTotal * (1 - discount)).toFixed(0);
  }
}
function createCartCard() {
  cartContainer.innerHTML = "";
  cart.map((ele) => {
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
    addToCart.innerText = "Remove from Cart";
    addToCart.addEventListener("click", () => {
      // function for handling remove from cart
      cart = cart.filter((data) => ele.id !== data.id);
      totalItems.innerText = "Total items in cart:" + cart.length;
      grandTotal = grandTotal - Number(ele.discountedPrice);
      totalAmount.innerText = "Total Amount :" + grandTotal;
      billAmount.innerText =
        "Bill Amount : " + (grandTotal * (1 - discount)).toFixed(0);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartCount.innerText = cart.length;
      createCartCard();
    });
    productBody.append(image, name, originalPrice, discountedPrice, addToCart);
    cartContainer.append(productBody);
  });
}
createCartCard();
