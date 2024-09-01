//SOAL 1
//expectation result :ubah huruf pertama selalu Besar
//example :
//Ronaldo
let nama = "RIZAL"

//tulis code disini
//1. Ambil huruf 1
let getFirstLetter = nama[0].toUpperCase()
let getOtherLetter = nama.slice(1).toLowerCase()
// let result = getFirstLetter + getOtherLetter
let result = `${getFirstLetter}${getOtherLetter}`
// console.log(`${nama[0].toUpperCase()}${nama.slice(1)}`);



//end

//SOAL 2
let description = "Dengan fitur kesehatan terintegrasi seperti"
//expectation result :apabila tulisan lebih dari 20 kata, perlu diberi ...
//example :
//Dengan fitur kesehatan terintegrasi seperti ...
//tulis code disini
let shortDesc = description.length <= 20 ? description : `${description.slice(0, 20)} ...`
console.log(shortDesc);



//end
//SOAL 3
let sentence = "Belajar JavaScript sangat menyenangkan";
let sentenceStrip = "Belajar-JavaScript-sangat-menyenangkan";

// console.log(sentence.split(" ").length)
// console.log(sentenceStrip.split("-").length)

//Expectation result: Hitung jumlah kata dalam string.
//Example: 4