// IMPORTANTE, hay que importar a este módulo el módulo addProduct AQUÍ en vez de en productList.js para que all llamar a createListeners
// en productList.js funcione.

import { addProduct } from "./addProduct";

export function createListeners() {
  // aquí cogemos todos los botones por el ID Es importante que en cada página que se use un botón de añadir al carrito se le ponga
  // este ID para que el listener se añada

  const buy = document.querySelectorAll("#addButton");

  for (let i = 0; i < buy.length; i++) { // con el for recorremos todos los botones y les añadimos el eventListener
    buy[i].addEventListener("click", () => {
      addProduct(buy[i].dataset.value, buy[i].dataset.image, buy[i].dataset.name, buy[i].dataset.price);

      // llamada al módulo de añadir producto, es importante que en cada página que se utilice un boton de añadir al carrito
      // se importe la función addProduct.
      // los parámetros que recibe addProduct son las etiquetas que hemos puesto en los botones, y así directamente
      // ya mete la info al hacer clic en cada producto.
    });
  }
}
