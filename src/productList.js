// importación del módulo createListeners
import { createListeners } from "./modules/createListeners";

const products = document.querySelector("#container"); // seleccionamos el div que va a contener los productos

localStorage.clear(); // esto es para que el carrito se borre
const cart = []; // esto es el array de productos que iremos metiendo en el localStorage
localStorage.setItem("product", JSON.stringify(cart)); // esto es para inicializar el carrito a 0
// Estas 3 cosas probablemente se tengan que cambiar al index.html o ponerlo en todas, estoy investigando.

async function getData() { // esta función es la que extrae los datos del json
  const res = await fetch("./assets/products.json");
  const json = await res.json();
  return json;
}

async function createCards(data) {
  const json = await data;

  json.forEach((product) => { // aquí es donde creamos las tarjetas de cada producto
    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = `<div class="flex flex-row lg:flex-col gap-2 border-1 border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
                          <img class="w-20 h-20 lg:w-full lg:h-48 rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none" src="${product.image}" alt="${product.name}">
                          <div class="flex flex-row justify-between">
                          <div class="flex flex-col lg:p-4 gap-2">
                          <h1><a class="font-bold hover:text-red-500" href="detalle.html?id=${product.id}">${product.name}</a></h1>
                          <h3 class="font-semibold">${product.price}€</h3>
                          </div>
                          <img id="addButton" data-value="${product.id}" data-image="${product.image}" data-name="${product.name}" data-price="${product.price}" class="w-10 h-12 cursor-pointer hover:invert" src="assets/icon/delivery-4.jpeg" alt="Comprar">
                          </div>
                          </div>
                          </div>`;

    /* IMPORTANTE: el botón de carrito, que en este caso es el de la furgoneta (de ejemplo), al utilizar una imagen
      le he tenido que quitar el value porque las imágenes no pueden tenerlo, así que le he puesto un ID para identificarlo
      y he creado unos valores (data-value, data-name, data-price, data-image para que sea más fácil acceder a los datos)
      el Tailwind en este sentido nos complica mucho la vida.
      Cuando tengamos el botón de Miriam, copiamos todas las propiedades y lo cambiamos por el que hay. */

    products.appendChild(cardContainer);
  });

  createListeners(); // llamada a la función encargada de añadir el evento a todos los botones #addbutton
}

const DATA = getData();
createCards(DATA);
