import {Router} from 'express';
import { ProductManager } from '../fileManager/productManager.js';

const router = Router();

let productos = ProductManager.leerProductos()

router.get('/', (req, res) => {
    res.render("realTimeProducts", { productos: productos })
})

export default router