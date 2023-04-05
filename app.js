import ProductManager from "./ServidorConExpress.js";
import express from 'express';

const productoPrueba1 = {
    name: "Producto de prueba",
    description: "No sirve para un carajo",
    price: 2000,
    thumbnail: "Sin Imagen",
    code: "abc123",
    stock: 25
}

const productoPrueba2 = {
    name: "Producto de prueba2",
    description: "No sirve para un jocara",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "123abc",
    stock: 12
}


const manager = new ProductManager();
const app = express();


console.log("Arreglo vacio")
console.log(manager.getProducts());

manager.addProduct(productoPrueba1);

console.log(manager.getProducts());

manager.addProduct(productoPrueba2);

console.log(manager.getProducts());


// app.listen(8083, () => {
//     console.log('Servidor escuchando en el puerto 8083');
//   });
