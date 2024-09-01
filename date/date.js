//DATE
let now = new Date();
console.log(now); // tampilkan tanggal/waktu sekarang

//timestamp = Sebuah angka integer merepresentasikan angka dari milidetik yang telah lewat sejak awal dari 1970

//menggunakan string
const inputDate = "31-01-2017"
const splitInputDate = inputDate.split('-')
const paramsDate = `${splitInputDate[2]}-${splitInputDate[1]}-${splitInputDate[0]}`

let date = new Date(paramsDate);
console.log(date)
//menggunakan parameter
// let date = new Date(year, month, date, hours, minutes, seconds, ms)
// let date = new Date(2017, 7, 30, 21, 12)

// console.log(date)

const monthName = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agst", "Sept"]
const dayName = ["Minggu", "Senin", "Tue", "Wed", "Thur", "Fri", "Satur"]

// console.log(date.getFullYear()); // Tahun
console.log(now.getMonth());
console.log(monthName[now.getMonth()]);
// Bulan (dimulai dari 0) 0-11
console.log(now.getDate()); // Tanggal
console.log(dayName[date.getDay()]); // Hari
console.log(now.getHours()); // Jam
console.log(now.getMinutes()); // Menit
console.log(now.getSeconds()); // Detik

//FORMAT TANGGAL
//- toDateString(): Menghasilkan string yang berisi tanggal tanpa waktu.
console.log(now.toDateString()); // Contoh output: "Tue Aug 30 2024"

// - toTimeString(): Menghasilkan string yang berisi waktu tanpa tanggal.
console.log(now.toTimeString());
//- toLocaleDateString(): Menghasilkan string yang berisi tanggal dalam format lokal.
console.log(now.toLocaleDateString());


//PRACTICE

//1.tampilkan 7 hari dari sekarang
// const now = new Date()

//2. Menghitung Selisih Waktu
// const mulai = new Date('August 25, 2024');
// const akhir = new Date('August 30, 2024');

//3. ubah format tanggal menjadi string
//"tanggal : 20, bulan :agustus , tahun :2024 "




