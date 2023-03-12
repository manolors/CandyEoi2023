// IMPORTANTE, hay que importar a este módulo el módulo addProduct AQUÍ en vez de en productList.js para que all llamar a createListeners
// en productList.js funcione.

import { addProduct } from "./addProduct";
let buy;
export function createListeners(action) {
  switch (action) {
    case "add":
      buy = document.querySelectorAll("#addButton"); // pon este id en cada botón que quieras que tenga addProduct

      for (let i = 0; i < buy.length; i++) { // con el for recorremos todos los botones y les añadimos el eventListener
        buy[i].addEventListener("click", () => {
          addProduct(buy[i].dataset.value, buy[i].dataset.image, buy[i].dataset.name, buy[i].dataset.price);
          // llamada al módulo de añadir producto
          // los parámetros que recibe addProduct son las etiquetas que hemos puesto en los botones, y así directamente
          // ya mete la info al hacer clic en cada producto.
        });
      }
      break;

    case "decrease":
      // aqui iría el añadir evento de restar un producto, NO hacer la función aquí, debe ser un módulo y ser importado
      break;

    case "delete":
      // aquí iría el añadir evento de eliminar producto, NO hacer la función aquí, debe ser un módulo y ser importado
      break;
  }
}
