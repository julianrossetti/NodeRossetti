
export class ProductManager {
    static products = []

    //Almacenar producto en el archivo
    static crearProducto(product){
        product.id = products.length() + 1 
        products.push(product)
    }

    static leerProductos(){
        return ProductManager.products;
    }
}

