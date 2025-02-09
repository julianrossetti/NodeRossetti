import {Router} from 'express';
import { ProductManager } from '../fileManager/productManager.js';

const router = Router();

let productos = ProductManager.leerProductos()
//YA VA A ESTAR DENTRO DEL PATH /api/products - PORQUE ASÍ LO DEFINIMOS EN EL ARCHIVO APP.JS

/** Método GET: PARA OBTENER TODOS LOS RECURSOS
 * Retornar todos los productos
 */
router.get('/', (req, res) => {
    res.render("index", { productos: productos })
})



/** Método GET: PARA OBTENER UN RECURSO
 * Retornar un producto según su ID .get(/:id)
 */
router.get('/:pid', (req, res) => {
    const idBuscado = req.params.pid
    const producto = productos.find(p => (p.id == idBuscado))
    if(!producto){
        res.status(404).send({status: "error", error: "Producto no encontrado"})
    }
    res.send(producto)

})

/** Método POST: PARA CREAR UN RECURSO
 * Crear un producto
 * 
 */

router.post("/", (req, res)=>{
    const newProduct = req.body;
    newProduct.id = productos.length +1
    productos.push(newProduct)
    res.json({message : "producto creado correctamente"})
})

/** Método PUT: PARA ACTUALIZAR UN RECURSO
 * Actualizar un producto
 */

router.put('/:pid', (req, res) => {
    const updatedProd = req.body;
    const prodId = req.params.pid;
    const prodIndex = productos.findIndex(p =>(p.id == prodId));
    if(prodIndex === -1){
        res.status(404).json({error: "Producto no encontrado"})
    }
    productos[prodIndex] = {... productos[prodIndex], ...updatedProd}
    res.status(200).json({message: "Producto modificado con exito."})
})

/** Método DELETE: PARA ELIMINAR UN RECURSO
 * Eliminar un producto
 */
router.delete("/:pid", (req, res)=>{
    const idSearched = req.params.pid;
    const prodIndex  = productos.findIndex(p =>(p.id == idSearched))
    if(idSearched === -1){
        res.status(404).json({error: "producto no encontrado"})
    }
    productos.splice(prodIndex, 1)
    res.json({message: "producto eliminado correctamente"})
})


export default router;