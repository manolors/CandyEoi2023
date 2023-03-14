export function decreaseProduct(idproduct) {
  const actualCart = JSON.parse(localStorage.getItem("product"));
  const decButton = document.querySelectorAll("#decButton");
  // const btn = document.querySelectorAll("#decButton");
  for (const i of actualCart) {
    if (i.id === idproduct && i.cantidad !== 1) {
      i.cantidad--;
      const productIndex = actualCart.indexOf(i);
      const amountHtml = document.querySelector(`#amount-${+productIndex}`);
      amountHtml.textContent--;

      if (i.cantidad === 1) {
        decButton[productIndex].classList.toggle("invisible");
      }
    }
  }

  localStorage.setItem("product", JSON.stringify(actualCart));
}
