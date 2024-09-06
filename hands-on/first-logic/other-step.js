let menu = [{
    label: 'Home',
    isActive: true
}, {
    label: 'About',
    isActive: false
}, {
    label: 'Services',
    isActive: false
}, {
    label: 'Contact',
    isActive: false
}]


const containerElm = document.getElementById('list-navbar')

//DISPLAY Data
displayData()

function displayData() {
    containerElm.innerHTML = ''
    menu.forEach((item, index) => {
        const createLi = document.createElement('li')
        const isActive = item.isActive == true ? 'bg-red-600 text-white' : ''
        const componentLi = `<li><a  href="#" class="nav-link text-lg px-4 py-2 rounded ${isActive}" onClick="setActiveMenu(${index})" >${item.label}</a></li>`

        createLi.innerHTML = componentLi
        containerElm.appendChild(createLi)

    })
}

function setActiveMenu(indexMenu) {
    const newMenu = menu.map((menu, index) => {
        return {
            label: menu.label,
            isActive: index === indexMenu ? true : false
        }
    })
    menu = newMenu

    displayData()
}

