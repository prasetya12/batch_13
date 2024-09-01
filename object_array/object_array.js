//ARRAY METHOD 
const buah = ['semangka', 'apel', 'jeruk']

//
// const numNew = [20,40,60,80,100,120,140]

// buah.forEach(function(){

// })
const num = [1, 2, 3, 4, 5, 6, 7]
// const numNew = []
// num.forEach((item, index) => {
//     // console.log(`${index}:${item}`)
//     // console.log(index)
//     let hasil = item * 20
//     numNew.push(hasil)
// })

// for (let x = 0; x < num.length; x++)
//     numNew.push(num[x] * 20)

const numNew = num.map((item, index) => {
    let hasil = item * 20
    return hasil
})

const numNilai = [80, 70, 50, 90, 100, 60]
const dataSiswa = [{
    absen: 201,
    name: "John",
    address: {
        province: 'Jawa Tengah',
        city: 'Solo'
    }
}, {
    absen: 202,
    name: "Doe",
    address: {
        province: 'Jawa Barat',
        city: 'Bandung'
    }
}, {
    absen: 204,
    name: "Michael",
    address: {
        province: 'Jawa Timur',
        city: 'Malang'
    }
}, {
    absen: 205,
    name: "John",
    address: {
        province: 'Jawa Tengah',
        city: 'Jogja'
    }
}]

const findJohn = dataSiswa.find((siswa) => {
    return siswa.name == 'John'
})
const findNameJohn = dataSiswa.filter((siswa) => {
    return siswa.name == 'John'
})
console.log(findJohn)
console.log(findNameJohn)



// const dataJohn = { absen: 201, 'nama depan': 'Johnatan', name: 'John', address: 'jogja', phone: '0812' }
// dataJohn.lastName = "Doe"
// dataJohn.absen = 1000
// console.log(dataJohn)
// console.log(dataJohn.nama depan)
// console.log(dataJohn['nama depan'])


// console.log(dataJohn['absen'])









const kkm = 75

const filterUnderKkm = numNilai.filter((nilai) => {
    return nilai <= kkm
})

const findAbsen = dataSiswa.find((siswa) => {

    return siswa.absen = 201
})





console.log(filterUnderKkm)

// const otherData = ['semangka', 0, {
//     name: 'John',
//     age: 20
// }]
// console.log(otherData)
// const dataUsers = [
//     {
//         name: 'John',
//         age: 20
//     },
//     {
//         name: 'Doe',
//         age: 30
//     }
// ]
// const user = {
//     name: "John",
//     age: 20
// }

const mobil = "Toyota"





