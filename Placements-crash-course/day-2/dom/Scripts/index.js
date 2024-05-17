//add your js code here
const cartCount = document.getElementById("cartCount");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.innerText = cart.length;
