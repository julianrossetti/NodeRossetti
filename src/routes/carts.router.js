import {Router} from 'express';
import {cartManager} from '../fileManager/cartManager.js';

const router = Router();
const carts = cartManager.carts
/** Método POST: PARA CREAR UN RECURSO
 * Crear un carrito - El carrito tiene un array de products
 */

router.post("/", (req, res)=>{
    const newCart = req.body;
    newCart.id = carts.length + 1
    carts.push(newCart)
    res.status(200).json({message: "carrito creado correctamente."})
})

/** Método GET: PARA OBTENER UN RECURSO
 * Retornar todos los productos de un carrito
 */

router.get("/:cid", (req,res)=>{
    const cartId = parseInt(req.params.cid);
    const searchedCart = carts.find(c =>(c.id == cartId))
    res.send(searchedCart.products)
})

/** Método POST: PARA AGREGAR UN PRODUCTO AL CARRITO */
router.post("/:cid/product/:pid", (req,res)=>{
    const cartId = parseInt(req.params.cid);
    const prodId = parseInt(req.params.pid);
    const prodInfo = req.body;
    prodInfo.id = prodId;
    const searchedCart = carts.find(c =>(c.id === cartId))
    searchedCart.products.push(prodInfo);
    res.status(200).json({message: "carrito actualizado"})
})


export default router;