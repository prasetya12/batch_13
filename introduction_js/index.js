// document.write('Belajar Javascript Yuk');
// console.log('Belajar Yuk')

let angka2 = 5


const angka1 = 100

//rule 
//1. tidak boleh diawali dengan angka
//const 1buah = ""
//2. tidak boleh ada spasi
//  const user name = ""

//3. tidak boleh ada tanda hubung -
//  const user name = ""
//camel case
const userName = "Ronaldo"

//snack case
const full_name = "Messi"
// const function = ""






// var angka1 =10




let result = angka1 + angka2;
console.log("Jumlah Angka 1 dan Angka 2 =" + result)

const ANGKA = 12345 //CONSTANTA

//TIPE DATA
//1. Primitive
let number = 10 //Number
let text = "Hello" //String
let text1 = 'Siang'
// let gabungan = `Hello Siang`
// let gabungan = text + ' ' + text1
let gabungan = `${text}-${text1}`
console.log(gabungan)


let isActive = true //Boolean
let empty = null //Null
let a            //Undefined

// console.log(typeof number)
// console.log(typeof text)
// console.log(typeof isActive)
// console.log(typeof empty)
// console.log(typeof a)




//2. Non-Primitive
//Object
let person = {
    name: "Messi", //String
    age: 20 //Number
    //key : value
}
//Array
let buah = ["apel", "semangka", "jeruk"];

//Operator Javascript

//1 Operator Aritmatika
let nilai1 = '14'
let nilai2 = 14
let hasil = 0
//+
hasil = nilai1 + nilai2
console.log(hasil)
//-
hasil = nilai1 - nilai2
console.log(hasil)
//*
hasil = nilai1 * nilai2
console.log(hasil)
// /
hasil = nilai1 / nilai2
console.log(hasil)
// %
hasil = nilai1 % nilai2
console.log(hasil)

//2. Operator Penugasan /Asssign
// nilai1 += nilai2
// nilai1 -= nilai2
// nilai1 *= nilai2
// nilai1 /= nilai2
// nilai1 %= nilai2
// nilai1++
//nilai1 += 1
console.log(nilai1, 'nilaibaru')

//3. Operator Comparison / Perbandingan
const isSame = nilai1 == nilai2
const isSameDataType = nilai1 === nilai2
const isNotSame = nilai1 !== nilai2
const biggerThan = nilai1 >= nilai2
const han = nilai1 <= nilai2

//4 Logical
const username = "admin123"
const password = "123"

console.log(username !== "" && username == "admin")
console.log(username == "admin123" || username == "admin")

//5 Ternary
const isCanEnter = username == "admin12" && password == "123" ? "Anda Berhasil Masuk" : "Anda Gagal"
console.log(isCanEnter, 'BISA MASUK')
//

// const hexa1 = 0x1f
// const hexa2 = 0x00
// console.log(hexa1 == hexa2)
//perbandingan ? benar : salah

//NUM TYPE CONVERSION

//IMPLICIT : OTOMATIS DI UBAH TYPE DATA NYA
let result_;
result_ = "3" + 2
console.log(typeof result_) //STRING +
result_ = "3" - true
//true/false = 1 /0 //Number

console.log(result_) //STRING +

//EXPLISIT : KITA UBAH MANUAL
result_ = "3" + String(0)
result_ = Number("3") + Number(true)
let isActiveBoolean = Boolean(1)
result = parseInt("80.99")
result = parseFloat("80.99")

// let num1 = 10
// let num2 = 20
let num1 = 10, num2 = 20, num3 = 20;
result_ = "angka1" - "angka2"

console.log(1 + result_)

console.log(result_)


















