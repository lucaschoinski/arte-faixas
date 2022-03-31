/*Abre e fecha o menu quando clicar no hamburger/x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar num item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll */
const header = document.querySelector(`#header`)
function changeHeaderWhenScroll() {
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*Tertimonials carroussel swiper*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*Scroll Review: mnostrar elementos quando scrollar*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `

#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #tertimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social

`,
  { interval: 100 }
)

/*Button back to top*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Active menu ate current visible page section*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When scroll*/
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/*When type in form insert data in submit button*/
const username = document.querySelector('#estimate .form #username').value
const email = document.querySelector('#estimate .form #email').value
const description = document.querySelector('#estimate .form textarea').value
const btn = document.querySelector('#estimate .form .button')

btn.addEventListener('click', function () {
  alert(`nome: ${username} email:${email} description: ${description}`)
})
