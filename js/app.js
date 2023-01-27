let $ = document

const navbar = $.querySelector('.nav-bar')
const mobileMenuIcon = $.querySelector('.nav-bar__mobile')
const menuUl = $.querySelector('.nav-bar__menus-ul')
const navbarMenuLi = $.querySelectorAll('.nav-bar__menus-li')

const scrollArrow = $.querySelectorAll('.scroller-arrow')


mobileMenuIcon.addEventListener('click', () => {
    if (menuUl.style.display !== 'flex') {
        menuUl.style.display = 'flex'
    } else {
        menuUl.style.display = 'none'
    }
})

function navbarMenuStyle() {
    navbarMenuLi.forEach(li => {
        if (window.innerWidth < 992) {
            li.classList.add('row')

        } else {
            li.classList.remove('row')
        }
    })

}

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 108) {
        if (window.innerWidth > 992) {
            navbar.classList.add('fixed')
        } else {
            navbar.classList.remove('fixed')
        }
    } else {
        navbar.classList.remove('fixed')
    }
})


scrollArrow[0].addEventListener('click', () => {
    window.scrollTo(0, 500)
})
scrollArrow[1].addEventListener('click', () => {
    window.scrollTo(0, 900)
})



window.addEventListener('resize', navbarMenuStyle())
window.addEventListener('load', navbarMenuStyle())