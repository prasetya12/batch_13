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

console.log(numNew)

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





