export function decreaseProduct(idproduct) {
  console.log("restando");
  const actualCart = JSON.parse(localStorage.getItem("product"));
  // const btn = document.querySelectorAll("#decButton");
  for (const i of actualCart) {
    if (i.id === idproduct && i.cantidad !== 1) {
      i.cantidad--;
    }

    // if (i.cantidad === 1) {
    //   btn.classList.add("hidden");
    // }

    // if (i.cantidad > 1) {
    //   btn.classList.remove("visible");
    // }
  }

  localStorage.setItem("product", JSON.stringify(actualCart));
}
