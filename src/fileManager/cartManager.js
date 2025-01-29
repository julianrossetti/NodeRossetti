 export class cartManager {
    static carts = []
    //Almacenar carrito en el archivo
    static crearCarrito(carrito){
        carrito.id = carts.length() + 1 
        carts.push(carrito)
    }
    static leerCarritos(){
        return cartManager.carts
    }
}

