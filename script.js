// Variables
var carrito = [];
var total = 0;

// Objeto Producto
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Array de productos
var productos = [
  new Producto("Auricular 1", 100),
  new Producto("Auricular 2", 200),
  new Producto("Auricular 3", 300),
  new Producto("Auricular 4", 400),
  new Producto("Auricular 5", 500)
];

// Función para agregar un producto al carrito
function agregarAlCarrito(precio, cantidad) {
  var subtotal = precio * cantidad;
  carrito.push({ precio: precio, cantidad: cantidad, subtotal: subtotal });
  total += subtotal;
  mostrarCarrito();
}

// Función para mostrar el carrito y el total
function mostrarCarrito() {
  var carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";

  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var item = document.createElement("li");
    item.textContent = producto.cantidad + " x " + producto.precio + " = $" + producto.subtotal;
    carritoElement.appendChild(item);
  }

  var totalElement = document.getElementById("total");
  totalElement.textContent = "Total a pagar: $" + total;

  // Salida por consola
  console.log("Carrito de compras:");
  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    console.log("- " + producto.cantidad + " x " + producto.precio + " = $" + producto.subtotal);
  }
  console.log("Total a pagar: $" + total);
}

// Ejemplo de uso
agregarAlCarrito(100, 2);
agregarAlCarrito(200, 1);
agregarAlCarrito(300, 3);

   