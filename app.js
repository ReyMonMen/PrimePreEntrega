import express from 'express';
import ProductsManager from './ServidorConExpress.js';


const productsManager = new ProductsManager();
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
    const products = await productsManager.readProducts()
    console.log(req.query);

    res.send(products);
})

app.get('/products/:pid', async (req, res) => {
    const product = await productsManager.getProductById(+req.params.pid);
    res.send(product);
})




const main = async () =>
{
  try
  {
    
    // const productsManager = new ProductsManager();

    await productsManager.loadData();

    await productsManager.addProduct(productoPrueba1);
    await productsManager.addProduct(productoPrueba2);
    await productsManager.addProduct(productoPrueba3);
    await productsManager.addProduct(productoPrueba4);
    await productsManager.addProduct(productoPrueba5);
    await productsManager.addProduct(productoPrueba6);
    await productsManager.addProduct(productoPrueba7);
    await productsManager.addProduct(productoPrueba8);
    await productsManager.addProduct(productoPrueba9);
   

    // const resProdMod = await productsManager.updateProductById(2, 'description', 'Desc 2 Cambio');
    // console.log(resProdMod);

    // const resId = productsManager.getProductById(2);
    // console.log(resId);
    

    // const resDelProdId = await productsManager.deleteProductById(1);
    // console.log(resDelProdId);

    // const products = await productsManager.readProducts();
    // console.log(products);

  }
  catch (e)
  {
    console.log(e);
  }
}

main ();




app.listen(8083, () => {
    console.log('Servidor escuchando en el puerto 8083');
});







const productoPrueba1 = {
    name: "Producto 1",
    description: "Desc1",
    price: 2000,
    thumbnail: "Sin Imagen",
    code: "abc123",
    stock: 25
}

const productoPrueba2 = {
    name: "Producto 2",
    description: "Desc2",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "123abc",
    stock: 12
}
const productoPrueba3 = {
    name: "Producto 3",
    description: "Desc3",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "a123bc",
    stock: 10
}
const productoPrueba4 = {
    name: "Producto 4",
    description: "Desc4",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "ab123c",
    stock: 16
}
const productoPrueba5 = {
    name: "Producto 5",
    description: "Desc5",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "1a23bc",
    stock: 47
}
const productoPrueba6 = {
    name: "Producto 6",
    description: "Desc6",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "1ab23c",
    stock: 52
}
const productoPrueba7 = {
    name: "Producto 7",
    description: "Desc7",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "1abc23",
    stock: 66
}
const productoPrueba8 = {
    name: "Producto 8",
    description: "Desc8",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "12a3bc",
    stock: 77
}
const productoPrueba9 = {
    name: "Producto 9",
    description: "Desc9",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "12ab3c",
    stock: 12
}

