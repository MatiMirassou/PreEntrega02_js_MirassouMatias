// Array
let productos = [
  { id: 1, name: "Piggies", artist: "Matias Mirassou", coleccion: "ALine", stock: 10000, price: 10 },
  { id: 2, name: "Flamingos", artist: "Matias Mirassou", coleccion: "ALine", stock: 9997, price: 30 },
  { id: 3, name: "Rubber Ducks", artist: "Matias Mirassou", coleccion: "ALine", stock: 9998, price: 50 },
  { id: 4, name: "Desintegrating Art", artist: "Decentral Artist", coleccion: "PArt", stock: 1000, price: 150 },
  { id: 5, name: "Stoic Art", artist: "Decentral Artist", coleccion: "PArt", stock: 998, price: 250 },
  { id: 6, name: "Ethereal Art", artist: "Decentral Artist", coleccion: "PArt", stock: 994, price: 350 },
  { id: 7, name: "Lions", artist: "John Doe", coleccion: "Wildlife", stock: 100, price: 1000 },
  { id: 8, name: "Bears", artist: "John Doe", coleccion: "Wildlife", stock: 97, price: 2500 },
  { id: 9, name: "Wolves", artist: "John Doe", coleccion: "Wildlife", stock: 91, price: 4000 },
];

const listar = (lista, propiedad1, propiedad2) => lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2]).join("\n")

let carrito = [];
let opcionMenu;

do {
  opcionMenu = Number(prompt("Elija la opción deseada:\n1: Agregar producto al carrito.\n2: Filtrar por colección.\n3: Finalizar Compra.\n0: Salir"));

  if (opcionMenu === 1) {
    agregarProductoAlCarrito(productos, carrito);
  } else if (opcionMenu === 2) {
    filtrarPorColeccion(productos);
  } else if (opcionMenu === 3) {
    let sum = carrito.reduce((total, producto) => total + producto.subtotal, 0);
alert("El subtotal del carrito de compras es: " + sum + "$" + "\n" + "El total del carrito mas IVA de compras es: " + (sum * 1.2) + "$");
break
}} while (opcionMenu !== 0);1

//Opcion 1
function agregarProductoAlCarrito(productos, carrito) {
  let opcion = Number(prompt("Agregar obra al carrito: " + "\n" + listar(productos, "id", "name") + "\n" + "0: Finalizar."));

  let productoBuscado = productos.find(producto => producto.id === opcion);

  if (productoBuscado) {
    let productoEnCarrito = carrito.find(producto => producto.id === opcion);
    if (productoEnCarrito) {
      productoEnCarrito.unidades++;
      productoEnCarrito.subtotal = productoEnCarrito.precioUnitario * productoEnCarrito.unidades;
    } else {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.name,
        precioUnitario: productoBuscado.price,
        unidades: 1,
        subtotal: productoBuscado.price,
      });
    }
  } else if (opcion !== 0) {
    alert("ID incorrecto");
  }
}

//Opcion 2
function filtrarPorColeccion(productos) { 
  const colecciones = productos.map(productp => productp.coleccion.toLowerCase());

  let coleccionSeleccionada;

  do {
    coleccionSeleccionada = prompt("Ingrese alguna de las siguientes colecciones: Aline, PArt, WildLife").toLowerCase();
  } while (!colecciones.includes(coleccionSeleccionada));

  const productosFiltrados = productos.filter(producto => producto.coleccion.toLowerCase() === coleccionSeleccionada);

  let opcion2 = Number(prompt("Agregar obra al carrito: " + "\n" + productosLista(productosFiltrados, "id", "name") + "\n" + "0: Finalizar."));
  let productoBuscado2 = productos.find(producto => producto.id === opcion2);
  if (productoBuscado2) {
      carrito.push({
        id: productoBuscado2.id,
        nombre: productoBuscado2.name,
        precioUnitario: productoBuscado2.price,
        unidades: 1,
        subtotal: productoBuscado2.price,
      });
    }else if (opcion !== 0) {
    alert("ID incorrecto");
  } }
function productosLista(lista, prop1, prop2) {
  return lista.map(item => `${item[prop1]} - ${item[prop2]}`).join("\n");
}

let sum = carrito.reduce((total, producto) => total + producto.subtotal, 0);
console.log("El subtotal del carrito de compras es: " + sum + "$" + "\n" + "El total del carrito mas IVA de compras es: " + (sum * 1.2) + "$");
