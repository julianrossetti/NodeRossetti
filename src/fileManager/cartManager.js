import fs from 'fs';

export class CartManager {

    constructor(){
        this.filePath = './carts.json';
    }

    //Almacenar producto en el archivo
    async crearCart(cart){
        try{         
            //Leer el archivo y obtenemos un objeto con los carritos
            let carts = await this.leerCarts();
            //Agregar el producto al listado de carritos
            carts.push(cart);
            //Escribir el archivo
            await fs.writeFile(this.filePath, JSON.stringify(carts,null,2));
            console.log('carrito creado exitosamente.');
        }catch(error){
            console.error('Error al crear un carrito');
        }
        
    }

    async leerCart(){
        try{
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data) || [];
        }catch(error){
            if (error.code === 'ENOENT') {
                return [];
            } else {
                console.error('Error al leer carritos:', error);
                throw error; 
            }
        }
    }
}
