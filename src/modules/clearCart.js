export function clearCart() {
  console.log("a chuparla");
  let cart = JSON.parse(localStorage.getItem("product"));
  cart = [];
  localStorage.setItem("product", JSON.stringify(cart));
  const cartHtml = document.querySelector("#productsCart");
  cartHtml.innerHTML = "";
}
