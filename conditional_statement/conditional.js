// let question = "Tahun Berapa Indonesia Merdeka?"
// let answer = 1945

// let inputUser = prompt(question)
// if (inputUser == answer) {
//     alert("Jawaban Benar")
// } else {
//     alert("Jawaban Tidak Benar")
// }

// let question = "Negara mana yang merdeka tahun 1945"
// let answer = "Indonesia"

// let inputUser = prompt(question)
// if (inputUser.toLowerCase() == answer.toLowerCase()) {
//     alert("Jawaban Benar")
// } else {
//     alert("Jawaban Tidak Benar")
// }

let question = "Berapa Umur Anda"
// let answer = "Indonesia"

let inputUser = ""

// let convInputUser = Number(inputUser)
// if (isNaN(convInputUser)) {
//     alert("Anda Masukan Bukan angka")
// } else {
//     if (inputUser < 5) {
//         alert("Anda Balita")
//     } else if (inputUser < 16) {
//         alert("Anda Anak Anak")
//     } else if (inputUser < 25) {
//         alert("Anda Remaja")
//     } else {
//         alert("Anda Dewasa")
//     }
// }

//practice 
//Score 90 - 100 	= A
// Score 80 - 89 	= B
// Score 70 - 79 	= C
// Score 60 - 69 	= D
// Score < 60 		= E

//SWITCH CASE
//
//switch(value){
// case 'perbandingan':
//     action code
//     break
// default :
// action code
//     break
//}

//enum 
// let hari = "Januari"

// switch (hari) {
//     case "Senin":
//         alert("Ini Hari Senin, Hari Kerja")
//         break
//     case "Selasa":
//         alert("Ini Hari Selasa, Hari Kerja")
//         break
//     case "Rabu":
//         alert("Ini Hari Selasa, Hari Kerja")
//         break
//     default:
//         alert("Hari tidak valid")
//         break
// }
const usernameDb = "admin"
const passwordDb = "admin123"

const usernameInput = ""
const passwordInput = ""
const isLogin = usernameInput == usernameDb ? "Anda Bisa Masuk" : "Anda Tidak Bisa Masuk"

if (usernameInput !== "" && passwordInput !== "") {
    if (usernameInput == usernameDb && passwordInput == passwordDb) {
        alert("Anda Berhasil Login")
    } else {
        alert("Username Password anda salah")
    }
} else {
    alert("Anda Harus Masukan Username & Password")
}

const user1 = "admin"
const user2 = "superadmin"

const inputUserLogin = "halo"

if (inputUserLogin == user1 || inputUserLogin == user2) {
    alert("Anda seorang Admin")
} else {
    alert("Anda Bukan seorang Admin")
}

//Logika && ||
//Bitwise binary 0101 & |
let num1 = 12 //1100
let num2 = 5 //1000

console.log(num1 | num2)
if (num1 & num2) {
    console.log("Bit ke-3 Diatur")
}


