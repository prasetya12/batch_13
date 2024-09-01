//MATH
//penjumlahan
let hasil = 1 + 2
// console.log(Math.PI)

//pembulatan ?
//random ?
//kuadrat ?
//logaritma ?
//trigonometri ?



//Object Matematika
let nilai = 8.18123
console.log(nilai)
//1. Pembulatan
//- floor() membulatkan kebawah
console.log(Math.floor(nilai))
//- round() membulatkan ke yang terdekat
console.log(Math.round(nilai))
//- ceil() membulatkan ke atas
console.log(Math.ceil(nilai))

// console.log(typeof nilai.toFixed(2))

//2. Akar
console.log(Math.sqrt(20))
console.log(Math.cbrt(27))

//3. Pangkat
// console.log(Math.pow(2))

//4 Random & Mutlak
// 0 <= x <1
// const randomNumber = Math.round(Math.random())
//mencari nilai random
console.log(Math.round(Math.random() * 100)) //bilangan random 0 sampai 100
//mencari nilai random dari rentang tertentu
let min = 20
let max = 30
let random = Math.random() * (max - min)
const randomBetween = Math.round(random) + min;
//Math.abs(-2)