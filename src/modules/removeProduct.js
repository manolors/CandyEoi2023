import { totalItems } from "./totalItems";
import { updatePrice } from "./updatePrice";

export function removeProduct(idproduct) {
  const actualCart = JSON.parse(localStorage.product);
  actualCart.forEach(product => {
    if (idproduct === product.id) {
      const productIndex = actualCart.indexOf(product);

      const cartContainer = document.querySelectorAll("#cartContainer");
      console.log(cartContainer[productIndex]);
      cartContainer[productIndex].remove();

      actualCart.splice(productIndex, 1);
    }
  });
  localStorage.setItem("product", JSON.stringify(actualCart));
  totalItems();
  updatePrice();
}
