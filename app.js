import ProductManager from "./ServidorConExpress.js";
import express from 'express';


const manager = new ProductManager();
const app = express();

app.listen(8083, () => {
    console.log('Servidor escuchando en el puerto 8083');
  });


// manager.addProduct(productoPrueba1);

// console.log(manager.getProducts());