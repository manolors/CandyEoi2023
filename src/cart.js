import { createListeners } from "./modules/createListeners";

const $show = document.querySelector("#productsCart");
const $pay = document.querySelector("#totalize");

function showCart() {
  const added = JSON.parse(localStorage.getItem("product"));
  let totalize = 0;
  for (let i = 0; i < added.length; i++) {
    const $div = document.createElement("div");
    $div.innerHTML = `<div id="productsCart" class="flex flex-row justify-around items-center gap-52 p-6">
                    <div class="flex flex-col gap-3 items-center">
                    <h1 class="font-bold">Producto</h1>
                    <img class="w-12" src="${added[i].imagen}" alt="">
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h1 class="font-bold">Nombre</h1>
                    <h2>${added[i].nombre}</h2>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h1 class="font-bold">Precio</h1>
                    <p>${added[i].precio}€</p>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h1 class="font-bold">Cantidad</h1>
                    <div class="flex flex-row gap-6">
                    <img class="w-6" src="assets/icon/carrito-de-compra-anadir.png" alt="" id="decButton" data-value="${added[i].id}">
                    <p>${added[i].cantidad}</p>
                    <img class="w-6" src="assets/icon/carrito-de-compra-anadir.png" alt="" id="addButton" data-value="${added[i].id}" data-image="${added[i].image}" data-name="${added[i].name}" data-price="${added[i].price}">
                    </div>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h1 class="font-bold">Subtotal</h1>
                    <h2>${added[i].precio * added[i].cantidad}€</h2>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <img class="w-6" src="assets/icon/gmail1.jpeg" alt="" data-value="${added[i].id} "id="delete">
                    </div>
                    </div>`;
    totalize = totalize + (added[i].precio * added[i].cantidad);
    $show.appendChild($div);
  }

  const $div = document.createElement("div");
  $div.innerHTML = `<h1>Total: ${totalize}€`;
  $pay.appendChild($div);
}
showCart();
createListeners("add");
createListeners("decrease");
createListeners("delete");
