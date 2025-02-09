import express from 'express';
import handlebars from "express-handlebars"
import __dirname from './util.js';
import productRouter from './routes/products.router.js';
import cartRouter from './routes/carts.router.js';
import realTimeProds from "./routes/realTime.router.js"
import { Server } from "socket.io"
import { ProductManager } from './fileManager/productManager.js';

const app = express();

const httpServer = app.listen(8080, () => {
    console.log("Listening en PORT 8080");
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//configuracion de motor de plantilla 
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views' );
app.set('view engine', 'handlebars');

//carpeta de archivos estaticos
app.use(express.static(__dirname + '/public'));


//rutas a prodcutos
app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);
app.use("/api/realtimeproducts", realTimeProds)

//serviodr socket
const socketServer = new Server(httpServer)
let productos = ProductManager.leerProductos()

socketServer.on("connection", (socket)=>{
    console.log("Nuevo cliente conectado")
    socket.on("message", data =>{
        console.log(data)
    })
    socket.on("newProduct", (newProd)=>{
        productos.push(newProd)
        console.log(productos)
    })
})

