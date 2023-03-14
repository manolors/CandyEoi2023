import { createListeners } from "./modules/createListeners";

const $show = document.querySelector("#productsCart");
const $pay = document.querySelector("#totalize");

function showCart() {
  const added = JSON.parse(localStorage.getItem("product"));
  let totalize = 0;
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
                    <p>${added[i].precio}€</p>
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
                    <h2>${added[i].precio * added[i].cantidad}€</h2>
                    </div>
                    <div class="flex flex-col gap-3 items-center">
                    <img class="w-6" src="assets/icon/gmail1.jpeg" alt="" id="delete" data-value="${added[i].id}">
                    </div>
                    </div>`;
    totalize = totalize + (added[i].precio * added[i].cantidad);
    $show.appendChild($div);

    const decButton = document.querySelectorAll("#decButton");
    console.log(decButton);

    if (added[i].cantidad === 1) { decButton[i].classList.toggle("invisible"); }
  }

  const $div = document.createElement("div");
  $div.innerHTML = `<h1>Total: ${totalize}€</h1>
                    <p>Productos: ${added.length}</p>`;
  $pay.appendChild($div);
}

showCart();
createListeners("add");
createListeners("decrease");
createListeners("delete");
// createListeners("clear");
