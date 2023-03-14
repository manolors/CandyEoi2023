import { createListeners } from "./modules/createListeners";
import { totalItems } from "./modules/totalItems";
import { updatePrice } from "./modules/updatePrice";

const $show = document.querySelector("#productsCart");

function showCart() {
  const added = JSON.parse(localStorage.getItem("product"));
  for (let i = 0; i < added.length; i++) {
    const $div = document.createElement("div");
    $div.setAttribute("id", "cartContainer");
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
                    <h2 class="font-bold">Precio</h2>
                    <p>${added[i].precio}</p>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h1class="font-bold">Cantidad</h1class=>
                    <div class="flex flex-row gap-6">
                    <img class="w-6" src="assets/icon/carrito-de-compra-anadir.png" alt="" id="decButton" data-value="${added[i].id}">
                    <p id="amount-${+i}">${added[i].cantidad}</p>
                    <img class="w-6" src="assets/icon/carrito-de-compra-anadir.png" alt="" id="addButton" data-value="${added[i].id}" data-image="${added[i].image}" data-name="${added[i].name}" data-price="${added[i].price}">
                    </div>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <h2 class="font-bold">Subtotal</h2>
                    <h2 id="itemPrice"></h2>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <img class="w-6" src="assets/icon/gmail1.jpeg" alt="" id="delete" data-value="${added[i].id}">
                    </div>
                    </div>`;
    $show.appendChild($div);

    const decButton = document.querySelectorAll("#decButton");

    if (added[i].cantidad === 1) { decButton[i].classList.toggle("invisible"); }
  }
}

showCart();
updatePrice();
totalItems();
createListeners("clear");
createListeners("add");
createListeners("decrease");
createListeners("delete");
