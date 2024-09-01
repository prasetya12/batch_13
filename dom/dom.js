
//parent
const getElmId = document.getElementById('menu')
// const bakso = document.getElementById('bakso')
const getClass = document.getElementsByClassName('menu-list')
const getTagName = document.getElementsByTagName('ul')


//query selector css
const queryById = document.querySelector('#menu')
const queryClass = document.querySelectorAll('.menu-list')

queryClass.forEach((item) => {
    item.style.color = 'red'
})



const queryTag = document.querySelector('ul')

const getElementJudul = document.getElementById('judul')

// getElementJudul.textContent = "<b>Menu Makanan Baru</b>"
getElementJudul.innerHTML = "<b>Menu Makanan Baru</b>"
getElementJudul.style.color = 'red'


const getElmUsername = document.getElementById('username')
const getElmPassword = document.getElementById('password')
const getElmButton = document.getElementById('btnLogin')


getElmButton.addEventListener('click', function () {
    clickBtnLogin()
})



function clickBtnLogin() {
    const username = getElmUsername.value
    const password = getElmPassword.value
    alert(`username:${username} password:${password}`)
}

const containerBuahElm = document.getElementById('list-buah')




const buah = ['apple', 'semangka', 'jeruk', 'nanas']

function displayBuah() {
    newDiv.innerHTML = ''
    //display
    buah.forEach((item, index) => {
        // console.log(item)
        const createLi = document.createElement('li')
        createLi.innerHTML = item
        createLi.style.cursor = 'pointer'
        createLi.addEventListener('click', function () {
            const newDataEdit = prompt("Edit Buah")
            if (newDataEdit) {
                buah[index] = newDataEdit
            }
            buah.forEach
        })
        // const liBuah = `<li>${item}</li>`
        newDiv.appendChild(createLi)

    })
}

function editBuah(newBuah) {
    if (newBuah) {
        buah[index] = newDataEdit
    }
}

const newDiv = document.createElement('div')

// buah.forEach((item, index) => {
//     // console.log(item)
//     const createLi = document.createElement('li')
//     createLi.innerHTML = item
//     createLi.style.cursor = 'pointer'
//     createLi.addEventListener('click', function () {
//         const newDataEdit = prompt("Edit Buah")
//         editBuah(newDataEdit)
//         //function edit
//         displayBuah()

//     })
//     // const liBuah = `<li>${item}</li>`
//     newDiv.appendChild(createLi)

// })
containerBuahElm.appendChild(newDiv)




const containerTodolist = document.getElementById('todolist')


const todoList = [{
    id: 0,
    text: 'Makan'
}, {
    id: 1,
    text: 'Belajar'
}]

todoList.forEach((item, index) => {
    // console.log(item)
    const createLi = document.createElement('li')
    createLi.innerHTML = item.text
    createLi.style.cursor = 'pointer'
    createLi.addEventListener('click', function () {
        editTask(item.id)
    })
    // const liBuah = `<li>${item}</li>`
    newDiv.appendChild(createLi)

})

function editTask(id) {
    const dataTask = todoList.find((item) => item.id == id)
    alert(dataTask.id)
}






// const newElm = document.createElement('li')
// //<li></li>
// newElm.textContent = "Mie Ayam"
// ////<li>"Mie Ayam"</li>
// getElmId.appendChild(newElm)
// console.log(getElmId)