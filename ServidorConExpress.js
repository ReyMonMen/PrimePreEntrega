const fs = require('fs').promises;


export class ProductManager {  
    
  
    constructor () {
        this.id = 1;
        this.products = [];
        this.path = `./products.json`;
      
    }

    async loadData()
    {
        // cargando el archivo al arreglo
        this.products = await this.readProducts();
    }

    async readProducts()
    {
        try
        {
            const productsJSON = await fs.readFile(this.path,  'utf-8' );
            // console.log(productsJSON)
            return JSON.parse(productsJSON);
        }
        catch (e)
        {
            // console.log(`El archivo ${this.path} no existe, creando...`);
            // await fs.writeFile(this.path, '[]');
            // return [];
        }
    }

    async pushData()
    {
        await fs.writeFile(this.path,JSON.stringify(this.products));

    }
    

    addProduct (product){

        manager.loadData();
        
        const findCode = this.products.find(products => products.code === product.code); 

        if(findCode){
            console.log(`El codigo de producto ${product.code} ya esta en uso`);
        }
        else{
            product.id = this.id++;
            this.products.push(product);
            manager.pushData();

        }
    }

    getProductById(id){

        manager.loadData();
      
        const findId = this.products.find(product => product.id === id);
      
        if(!findId){
          return "Producto no encontrado";
        }
      
        return findId;
    }
    
    getProducts(){

        manager.loadData();

        return this.products;
    }

    deleteProductById (id){
        manager.loadData();
        const findId = this.products.find(product => product.id === id);

        if(findId){
            let index = this.products.indexOf(this.products.find(product => product.id === id));
            this.products.splice(index,1);
            manager.pushData();
        }
        else 
            console.log(`El producto id Nro: ${id} no existe.`);

        

    }

    updateProductById(id, key, value){
        
        manager.loadData();

        const findId = this.products.find(product => product.id === id);

        if(findId){
            if(key in findId){
                let index = this.products.indexOf(this.products.find(product => product.id === id));
                this.products[index][key]= value;
                manager.pushData();    
            }
            else
                console.log('key not found');
            
        }
        else
            console.log(`El producto id Nro: ${id} no existe.`);
            
    }
}; 



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

// const manager = new ProductManager();
// console.log("Arreglo vacio")
// console.log(manager.getProducts());

manager.addProduct(productoPrueba1);

// console.log(manager.getProducts());

manager.addProduct(productoPrueba2);

// console.log(manager.getProducts());

// manager.deleteProductById(4);

// manager.updateProductById(2, 'description', 'cambio de descripcion2');

// console.log(manager.getProducts());

// manager.addProduct(productoPrueba1);

// console.log(manager.getProductById(2))

// console.log(manager.getProductById(1))

export default ProductManager;