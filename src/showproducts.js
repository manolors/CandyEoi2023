const $products = document.querySelector("#container");

localStorage.clear(); // esto es para que el carrito se borre
const cart = []; // esto es el array de productos que iremos metiendo en el localStorage
localStorage.setItem("product", JSON.stringify(cart)); // esto es para inicializar el carrito a 0
// Estas 3 cosas probablemente se tengan que cambiar al index.html o ponerlo en todas, estoy investigando.

async function getData() { // esta función es la que extrae los datos del json
  const res = await fetch("./assets/products.json");
  const json = await res.json();
  console.log(json); // esto se puede quitar, simplemente es para comprobar en la consola que está bien
  json.forEach((product) => { // aquí es donde creamos las tarjetas de cada producto
    const $div = document.createElement("div");
    $div.innerHTML = `<div class="flex flex-row lg:flex-col gap-2 border-1 border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
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
    $products.appendChild($div);
  });

  const buy = document.querySelectorAll("#addButton"); // aquí cogemos todos los botones por el ID
  for (let i = 0; i < buy.length; i++) { // con el for recorremos todos los botones y les añadimos el eventListener
    buy[i].addEventListener("click", () => {
      addProduct(buy[i].dataset.value, buy[i].dataset.image, buy[i].dataset.name, buy[i].dataset.price);
      // estos parámetros son las etiquetas que hemos puesto en los botones, y así directamente ya mete la info al hacer clic en cada producto.
      // esto llama a la función que hay desarrollada más abajo, que es la que tendremos que importar si queremos.
    });
  }
}
getData();

// esta función de addProduct es la que tendremos que poner aparte para importarla a todas las páginas si queremos hacerlo así. De esta manera ya la tenemos lista para copiar y pegar en otro js y utilizarla.
// esta función añade el producto. Busca si ya está, y si está le aumenta la cantidad, si no, lo añade.
function addProduct(idproduct, image, name, price) {
  const actualCart = JSON.parse(localStorage.getItem("product"));// aquí traemos el carrito que haya y lo transformamos en objeto para poder leerlo.
  let found = false; // esto es para poder hacer la función de sumar cantidad o de introducir uno nuevo
  for (const value of actualCart) { // con el for of recorremos el carrito que nos hemos traído
    if (value.id == idproduct) { // aquí comparamos el id de los productos que hayan en el carrito y lo comparamos con el id del que queremos meter (pongo id porque ya arriba está el parámetro definido y te devuelve directamente el id del producto)
      value.cantidad++; // si es el mismo, se incrementa la cantidad
      found = true; // marco como encontrado el producto
    }
  }
  if (!found) { // aquí, si el producto NO es encontrado entonces...
    const lineProduct = { id: idproduct, imagen: image, nombre: name, precio: price, cantidad: 1 }; // meto el nuevo producto al carrito con los atributos que indico y AÑADO CANTIDAD:1 para que refleje la cantidad acumulada
    actualCart.push(lineProduct); // como no hay ningún producto con el id igual, añado este producto al carrito que teníamos
  }
  localStorage.setItem("product", JSON.stringify(actualCart)); // transformo el carrito (bien con el producto nuevo añadido, o bien aumentada la cantidad) en STRING para meterlo de nuevo en el localStorage
}

// así funciona perfecto, se añaden los productos y se aumenta la cantidad.
// si quieres investigar otros métodos, copiate el código y experimentas, y así nos aseguramos de que pase lo que pase nos va a funcionar.
