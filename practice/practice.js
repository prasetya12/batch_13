import { dataPenjualan } from './data.js'


const numArray = [5, 10, 20, 100]
const dataProduct = [{
    nama: "Pencil",
    quantity: 5,
    price: 3000
}, {
    nama: "Buku",
    quantity: 10,
    price: 5000
}, {
    nama: "Kotak Pencil",
    quantity: 3,
    price: 7000
}, {
    nama: "Snack",
    quantity: 2,
    price: 1000
}]


let hasil = 0

numArray.forEach((num) => {
    hasil += num
})

// console.log(jumlahArray, 'using reduce')


// const jumlahArray = numArray.reduce((total, jumlah) => total + jumlah)

const sumProductPrice = dataProduct.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity)
}, 0)
console.log(sumProductPrice, 'using reduce')

const user = {
    name: "Balmon",
    age: 25,
    job: "Developer",
    address: {
        province: "Jogja",
        city: "Sleman",
    }
}
let kota = "Semarang"



//coba ambil nama user
// const city = user.address.city
// const province = user.address.province


// const { city: kotaBaru, province } = user.address

// user.address.city = "Semarang"

// console.log(kotaBaru)
// const {}
//restructuring/ object
// const { name } = user
// const { city, province } = user.address

// console.log(city)
// console.log(province)


// for (let key in user) {
//     console.log(`key: ${key} values : ${user[key]}`)
// }
// const userEntries = [["name","Balmon"],["age",25]]
//bisa dapetin value aja
//const user = ["Balmon",25,"Developer"]
const userValue = Object.values(user)
console.log(userValue)

//bisa dapetin key aja
// const keyUser = ["name","age","job"]
const userKey = Object.keys(user)
console.log(userKey)
const userEntries = Object.entries(user)
console.log(userEntries)






//1. Tampilkan data dengan format 
//[{product,category,price}]

//2. hitung total penjualan perbarang (price * quantity)
//clue , hint reduce

//3. Cari product dengan id 5
//find

//4. Tampilkan data yang bercategory elektronik
//filter

//5. Hitung total pendapatan 
//reduce

