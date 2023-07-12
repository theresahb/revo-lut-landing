const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer')
const addImage = document.querySelectorAll("img[alt='add']")
const minusImage = document.querySelectorAll("img[alt='minus']")
const title = document.querySelectorAll('.title')
const drop = document.querySelectorAll('.drop')
const menuBtn = document.querySelectorAll('.tab')
const dropMenu = document.querySelectorAll('.menu')
const mobileTitle = document.querySelectorAll('.mobile-title')
const mobileDrop = document.querySelectorAll('.mobile-drop')

// mobile hamburger
const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-links')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('out')
})

// mobile menu
const tabLink = document.querySelectorAll('.mobile-tab')
const tabCard = document.querySelectorAll('.card')

tabCard[0].style.display = 'flex'

tabLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        tabLink.forEach((link, i) => {
            if(i === index) {
                tabLink[i].classList.add('shown')
                tabCard[i].style.display = 'inherit'
            }
            else {
                link.classList.remove('shown')
                tabCard[i].style.display = 'none'
            }
        })
    })
})

for (let i = 0; i < mobileTitle.length; i++) {
    mobileTitle[i].addEventListener('click', () => {
        mobileDrop[i].classList.toggle('drop-open')
    })
}

// desktop menu
menuBtn.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        menuBtn.forEach((btn, i) => {
            if(i === index) {
                menuBtn[i].classList.add('show')
                dropMenu[i].style.display = 'inherit'
            }
            else {
                btn.classList.remove('show')
                dropMenu[i].style.display = 'none'
                menuBtn[i].classList.remove('show')
            }
        })
    })
})

window.addEventListener('click', (event) => {
    if (!event.target.matches('.tab') && !event.target.matches('.menu')) {
        dropMenu.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// faqs
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', () => {
        answer[i].classList.toggle('active')
        if(addImage[i].classList.contains('release')) {
            minusImage[i].classList.remove('release')
        }
        else {
            console.log('hey')
            minusImage[i].classList.add('release')
            addImage[i].classList.remove('release')
        }
    })
    
}

// footer menu
for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', () => {
        drop[i].classList.toggle('release')
    })
}
