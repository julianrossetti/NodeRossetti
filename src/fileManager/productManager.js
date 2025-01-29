
export class ProductManager {
    static products = [{id: "1", name: "jarro"}]

    //Almacenar producto en el archivo
    static crearProducto(product){
        products.push(product)
    }

    static leerProductos(){
        return ProductManager.products;
    }
}

