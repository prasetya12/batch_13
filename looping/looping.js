//FOR
//for(init variabel loop;perbandingan;action ngubah variabel){
//}

// for (let i = 0; i < 10; i++) { //required
//     console.log(i)
// }
// console.log('end')

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

//mendapatkan bilangan bulan genap
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// console.log("Perulangan - 1")
// console.log("Perulangan - 2")
// console.log("Perulangan - 3")
// console.log("Perulangan - 4")



// console.log('end')

// let repeat = confirm('Apakah anda mau mengulang ?')

// let counter = 0
// while (repeat) {
//     console.log('Anda masuk perulangan')
//     repeat = confirm('Apakah anda mau mengulang,Lagi ?')
//     counter++  //optional
//     // if (jawab == false) {
//     //     repeat = false
//     // }
// }

// console.log(counter)
// let counter = 0

// while (counter <= 10) {
//     console.log('Perulangan ke-' + counter)

//     counter++ //required
// }

const welcomeMessage = `Selamat Datang Diperusahaan PT ABC
Informasi Apa yang anda butuhkan : 
1. Informasi Perusahaan
2. Visi dan Misi 
3. Keluar
`
let isRunning = true


// while (isRunning) {
//     let userInput = prompt(welcomeMessage)

//     switch (userInput) {
//         case '1':
//             alert("PT ABC adalah [erusahaan yang dibikin tahun 2024")
//             break;
//         case '2':
//             alert("Visi Misi Perusahaan")
//             break;
//         case '3':
//             isRunning = false
//             alert("Terima kasih sudah berkunjung")
//             break;
//         default:
//             alert("Input yang anda masukan tidak valid")
//             break
//     }
// }

let i = 20
do {
    console.log(i)
    i++
} while (i < 10)
console.log(i)

while (i < 10) {
    console.log(i)
    i++
}

//Function
// function namaFungsi(){

// } 

//Arrow Function
// const namaFungsi = ()=>{

// }

// const namaFungsi = function(){

// }

function addZero(param) {
    if (param < 10) {
        return `0${param}`
    } else {
        return param
    }

}



const now = new Date()
const getYear = now.getFullYear()
let getMonth = now.getMonth()
let getDate = now.getDate()

//Ternary
// let variabel = perbandingan? (true):(false)
// const newMonth = getMonth < 10 ? `0${getMonth}` :
// if (getDate < 10) {
//     getDate = `0${getDate}`
// }
// if (getMonth < 10) {
//     getMonth = `0${getMonth}`
// }
function ucapanSelamatUlangTahun(name) {
    console.log(`Selamat Ulang Tahun ${name}`)
}

// ucapanSelamatUlangTahun('Donald')

console.log(addZero(4))
// tampilkanGreeting()
function tampilkanGreeting() {
    console.log("Selamat Siang")
}
// function tampilkanGreetingDenganReturn() {
//     return "Selamat Siang"
// }
let tampilkanGreetingDenganReturn = () => {
    return "Selamat Siang"
}
tampilkanGreeting()
console.log(tampilkanGreetingDenganReturn())
console.log(`${addZero(getDate)}-${addZero(getMonth)}-${getYear}`)
// console.log(addZero(getDate)+' ')

// const num = [1, 2, 3, 4, 5, 6, 7]

// function tambah(...numbers) {
//     return numbers.reduce((total, num) => total + num, 10)
//     console.log(numbers)
// }

// console.log(tambah(1, 2, 3, 4, 5, 6, 4, 4, 5, 6, 7))

//01-09-2024
// Math.pow()
// Math.floor()


// const nowSekarang = new Date()
// console.log(`0${getDate}-${getMonth}-${getYear}`)
//Tanggl 01 Bulan 09 Tahun 2024


// console.log(nowSekarang)

