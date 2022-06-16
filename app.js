let checkout = [];
let total = 0;
let condicional = "si";
let deposito = [
  {
    sku: 1,
    name: "Gorra de Red Bull",
    price: 2500,
  },
  {
    sku: 2,
    name: "Remera de Ferrari",
    price: 8000,
  },
  {
    sku: 3,
    name: "Pantalon de Mercedes Benz",
    price: 10000,
  },
  {
    sku: 4,
    name: "Campera de Mclaren",
    price: 25000,
  },
];


// Ejecucion del programa

alert("Bienvenidos a la tienda de compras de la F1");


while (condicional == "si") {
  let carrito = Number(
    prompt(`Ingrese el articulo que desee adquirir:
    1. Gorra de Red Bull
    2. Remera de Ferrari
    3. Pantalon de Mercedes Benz
    4. Campera de Mclaren:`)
  );
  if (carrito < 5 && carrito > 0) {
    checkout.push(carrito);
    condicional = prompt(
      "Quiere realizar otra compra? Responda a si o no"
    ).toLowerCase();
    if (condicional != "si" && condicional != "no") {
      alert("No ingresaste una respuesta valida, vuelva a intentarlo");
      condicional = prompt(
        "Quiere realizar otra compra? Responda a si o no"
      ).toLowerCase();
    }
  } else {
    alert("Ese producto no se encuentra en stock");
  }
}

for (let producto of checkout) {
  total += deposito[producto - 1].price;
}

alert(`Su total es: $${total}`);

alert("Gracias por tu compra");
