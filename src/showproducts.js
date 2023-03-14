(() => {
  const $products = document.querySelector("#container");

  async function getData() {

      let res = await fetch("./assets/products.json");
      let json = await res.json();
      console.log(json);
      json.forEach((product) => {
        const $div = document.createElement("div");
        $div.innerHTML = `<div class="flex flex-row lg:flex-col gap-2 border-1 border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
                          <a href="fizzbang.html"><img class="w-20 h-20 lg:w-full lg:h-48 rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none" src="${product.image}" alt="${product.name}"></a>
                          <div class="flex flex-col lg:p-4 gap-2">
                          <h1><a class="font-bold" href="fizzbang.html">${product.name}</a></h1>
                          <h3 class="font-semibold">${product.price}€</h3>
                          </div>
                          </div>
                          </div>`;
        $products.appendChild($div);
      });
    }

  getData();

  })();
