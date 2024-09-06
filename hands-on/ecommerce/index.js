//1. Siapkan Data ? a. bikin array object product , b.get api

// const data = [{ id: 1, name: 'Mobil' }]
// //get data
// fetch('https://dummyjson.com/products')
//     .then(res => {
//         res.json().then((product) => {
//             // console.log(product.products)

//         })
//     })
//     .then(console.log);

async function getProducts() {

    const listProductElm = document.getElementById('productList')
    const response = await fetch('https://dummyjson.com/products')
    const products = await response.json()
    //selesai
    const dataProducts = products.products

    listProductElm.innerHTML = ''
    dataProducts.forEach((item) => {
        const cardProduct = document.createElement('div')
        cardProduct.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow')
        cardProduct.innerHTML = `<a href="#">
                <img class="rounded-t-lg" src="${item.images[0]}" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${item.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Details
                     <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>`
        listProductElm.appendChild(cardProduct)
        console.log(item)
    })

    console.log(dataProducts)
}

getProducts()

// getProducts()
//2. Tampilkan Product 


//3. Get Category 
// a. get api category dari ''https://dummyjson.com/products/categories''
//4. Tampilkan Category

//5. berikan trigger , setelah memilih category , call api product 'https://dummyjson.com/products/category/smartphones'

//1. Search Product
//2. Get Value dari input
//3. Bikin button untuk nge trigger dan dapatkan value dari input
// const inputSeach = .value()
//4. get product by search 'https://dummyjson.com/products/search?q=${inputSeach}'