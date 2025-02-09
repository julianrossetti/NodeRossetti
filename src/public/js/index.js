const socket = io()

const createButton = document.getElementById("CreateProd")
let prodName = document.getElementById("ProductName")
let prodPrice = document.getElementById("ProductPrice")
let prodStock = document.getElementById("ProductStock")

createButton.addEventListener("click", ()=>{
    let newProd = {name: prodName.value,
                   price: prodPrice.value,
                   stock: prodStock.value
    }
    socket.emit("newProduct", newProd)
    prodName.value = ""
    prodPrice.value = ""
    prodStock.value = ""
})