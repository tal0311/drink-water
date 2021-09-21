const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const precentage = document.querySelector('#precentage')
const remained = document.querySelector('#remaind')
console.log('WELCOME USER!')

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
  smallCups.forEach((cup, index2) => {
    if (index2 === index) {
      cup.classList.toggle('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length
  console.log(fullCups, totalCups)

  precentage.style.height = `${(fullCups / totalCups) * 330}px`
  precentage.innerText = `${(fullCups / totalCups) * 100}%`
  liters.innerText = `${100 - (fullCups / totalCups) * 100}% `

  if (fullCups === totalCups) {
    remained.style.visability = 'hidden'
    remained.style.height = 0
  }
}
