import { dataSiswa } from './data.js'

console.log(dataSiswa)
//1. Tampilkan nama dari data tersebut di Index 1
console.log(dataSiswa[1])
//Expected Result 
//'Andi Saputra'


//2. Tampilkan data baru dengan hanya menampilkan {nama, jurusan} 
///Expected Result 
//[{nama:nama: 'Andi Saputra',jurusan: 'Komputer'}...]
// const newData = dataSiswa.map((siswa) => {
//     return {
//         nama: siswa.nama,
//         jurusan: siswa.jurusan
//     }
// })
// console.log(newData)


//3. Tampilkan beberapa data dengan format string sbb dari data diatas:
// "Nama {Andi Saputra} mendapatkan nilai Matematika sebesar ${nilai}"
console.log(dataSiswa)
dataSiswa.forEach((siswa) => {
    console.log(`Nama ${siswa.nama} mendapatkan nilai Matematika sebesar ${siswa.nilai.matematika}`)
})


//4. Tampilkan nama berdasarkan nomor absen , misal 1, akan keluar data nama yang absen 1 
let noAbsen = 1
// const findAbsen = dataSiswa.find((siswa) => {
//     return siswa.no_absen == noAbsen
// })

// const findAbsen = dataSiswa.find((siswa) => (siswa.no_absen == noAbsen))
const findAbsen = dataSiswa.find((siswa) => siswa.no_absen == noAbsen)

// let findSiswabNoAbsen=
//5. Ada berapa siswa yang mendapatkan nilai matematika diatas atau sama dengan 75
const siswaNilai = dataSiswa.filter((siswa) => {
    return siswa.nilai.matematika >= 75;
});
console.log(siswaNilai.length);
