// Array
let productos = [
  {id: 1, name: "Piggies", artist: "Matias Mirassou", collection: "Assembly Line", stock: 10000, price: 10},
  {id: 2, name: "Flamingos", artist: "Matias Mirassou", collection: "Assembly Line", stock: 9997, price: 30},
  {id: 3, name: "Rubber Ducks", artist: "Matias Mirassou", collection: "Assembly Line", stock: 9998, price: 50},
  {id: 4, name: "Desintegrating Art", artist: "Matias Mirassou", collection: "A Piece of Art", stock: 1000, price: 150},
  {id: 5, name: "Stoic Art", artist: "Matias Mirassou", collection: "A Piece of Art", stock: 998, price: 250},
  {id: 6, name: "Ethereal Art", artist: "Matias Mirassou", collection: "A Piece of Art", stock: 994, price: 350},
  {id: 7, name: "Lions", artist: "John Doe", collection: "Wildlife Collection", stock: 100, price: 1000},
  {id: 8, name: "Bears", artist: "John Doe", collection: "Wildlife Collection", stock: 97, price: 2500},
  {id: 9, name: "Wolves", artist: "John Doe", collection: "Wildlife Collection", stock: 91, price: 4000},
];

// Carrito
const listar = (lista, propiedad1, propiedad2) => lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2]).join("\n");

let carrito = [];
let opcion;
do {
  opcion = Number(prompt("Agregar obra al carrito: " + "\n" + listar(productos, "id", "name") + "\n" + "0: Para finalizar."));
  if (opcion !== 0) {
    let productoBuscado = productos.find(producto => producto.id === opcion);
    let productoEnCarrito = carrito.findIndex(producto => producto.id === opcion);

    if (productoEnCarrito !== -1) {
        carrito[productoEnCarrito].unidades++;
        carrito[productoEnCarrito].subtotal = carrito[productoEnCarrito].precioUnitario * carrito[productoEnCarrito].unidades;
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.name,
            precioUnitario: productoBuscado.price,
            unidades: 1,
            subtotal: productoBuscado.price * 1
        });
    }
    console.log(carrito);
  }
} while (opcion !== 0);

// Suma de los items del carrito
let sum = carrito.reduce((total, producto) => total + producto.subtotal, 0);
console.log("El subtotal del carrito de compras es: " + sum + "$" + "\n" + "El total del carrito mas IVA de compras es: " + (sum*1.2) + "$" );
