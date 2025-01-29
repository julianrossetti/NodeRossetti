import {Router} from 'express';
import { ProductManager } from '../fileManager/productManager.js';

const router = Router();

let productos = ProductManager.leerProductos()
//YA VA A ESTAR DENTRO DEL PATH /api/products - PORQUE ASÍ LO DEFINIMOS EN EL ARCHIVO APP.JS

/** Método GET: PARA OBTENER TODOS LOS RECURSOS
 * Retornar todos los productos
 */
router.get('/', (req, res) => {
    res.send(productos)
})

/** Método GET: PARA OBTENER UN RECURSO
 * Retornar un producto según su ID .get(/:id)
 */
router.get('/:id', (req, res) => {
    const idBuscado = req.params.id
    const producto = productos.find(p => (p.id == idBuscado))
    if(!producto){
        res.status(404).send({status: "error", error: "Producto no encontrado"})
    }
    res.send(producto)

})

/** Método POST: PARA CREAR UN RECURSO
 * Crear un producto
 */

/** Método PUT: PARA ACTUALIZAR UN RECURSO
 * Actualizar un producto
 */

/** Método DELETE: PARA ELIMINAR UN RECURSO
 * Eliminar un producto
 */



export default router;