//API 

//PROMISE
fetch('https://fakestoreapi.com/products').then((response) => {
    // console.log(response, 'halo')
    response.json().then((data) => {
        const totalPrice = data.reduce((acc, data) => acc + data.price, 0)
        console.log(totalPrice)
    })
})


//ASYNC AWAIT
async function getDataProduct() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    const totalPrice = data.reduce((acc, data) => acc + data.price, 0)
    console.log(totalPrice)
    console.log(data, 'data')
}

getDataProduct()
