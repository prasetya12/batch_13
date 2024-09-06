//Problem : Menu active ketika klik

//Problem Solving
//1. Siapkan data array menu
const menu = ['Home', 'About', 'Services', 'Contact']
//2. Tampilkan data array menu ke dalam html (Convert html to js DOM)
//a. Define elm container dimana kita memasukan navbar
const containerElm = document.getElementById('list-navbar')
menu.forEach((item, urutan) => {
    const createLi = document.createElement('li')
    const componentLi = `<a href="#" id="${urutan}" class="nav-link text-lg px-4 py-2 rounded " onClick="setActiveMenu(this)" >${item}</a>`

    createLi.innerHTML = componentLi
    containerElm.appendChild(createLi)

})
//3. Buat fungsi untuk mentrigger active 
//a. berikan class active
function setActiveMenu(ini) {
    console.log(ini.parentElement)
    // //a. define untuk indentifikasi masing masing menu
    // // const navLinkElm = document.getElementsByClassName('nav-link')
    // const navLinkElm = document.querySelectorAll('.nav-link')

    // //remove all active menu
    // navLinkElm.forEach((menu, index) => {

    //     // menu.classList.remove('bg-red-600', 'text-white')
    //     navLinkElm[urutanTrigger].classList.remove('bg-red-600', 'text-white')
    // })

    // // navLinkElm.forEach((menu, index) => {
    // //     console.log(menu)
    // // })

    // // navLinkElm.classList.remove('bg-red-600', 'text-white')

    // navLinkElm[indexMenu].classList.add('bg-red-600', 'text-white')
}
