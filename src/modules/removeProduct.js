export function removeProduct(idproduct) {
  // const actualCart = JSON.parse(localStorage.getItem("product"));
  const btn = document.querySelector("#delete");
  const value = btn.dataset.value;
  console.log(value);
  // actualCart.splice(value, 0);
  // const div = document.querySelector("#productsCart");
  // div.innerHTML = "";
  // localStorage.setItem("product", JSON.stringify(actualCart));
}
