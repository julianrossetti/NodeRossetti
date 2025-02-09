
export class ProductManager {
    static products = [{name: "pala", price: 21, stock: 20}, {name: "pico", price: 23, stock: 20}]

    //Almacenar producto en el archivo
    static crearProducto(product){
        product.id = products.length() + 1 
        products.push(product)
    }

    static leerProductos(){
        return ProductManager.products;
    }
}

