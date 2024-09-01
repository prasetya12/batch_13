//STRING
let single = 'single-quoted'
let double = "double-quoted"

//bisa digunakan untuk menyisipkan expression javascript
let backticks = `
${single}
hello 
world
`
// console.log(backticks, 'ini pake backticks')

//Karakter Spesial

let str1 = "Hello\nWorld\n"
// console.log(str1)

// alert('I\'m the Walrus!'); // I'm the Walrus!


//PANJANG STRING
let str = "Halo Siang"
// ["H", "e", "l", "l", "o"]
// console.log(str.length)


//MENGAKSES STRING
// console.log(str[10])
// console.log(str.charAt(0))

//Mengakses Karakter Terakhir
// console.log(str[str.length - 1])
// console.log(str.length)


//MANIPULATION STRING
//1. Mengganti Case
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

//2. Mencari substring
// str.indexOf(substr,position)
let strString = 'Widget with id'

// console.log(strString.indexOf('id'))

//3. Includes Mencari String didalam string
let greeting = "Hallo Selamat Siang"
console.log(greeting.toUpperCase().includes('Siang'.toUpperCase()))


//4. Mengambil Substring
//str.slice(start [, end])

// console.log(strString.slice(7, 11))

//5. trim()
//menghilangkan space pada sebuah string
let email = " admin@gmail.com "
console.log(email)
console.log(email.length)
let emailTrim = email.trim()
console.log(emailTrim)
console.log(emailTrim.length)





