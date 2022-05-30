const app = document.querySelectorAll('.js-app')
const appContainer = document.querySelector('.app-box')
const startButton = document.querySelector('.start')
const title = document.querySelector('.title')
const footer = document.querySelector('.score')
const gameOver = document.querySelector('#gameover')
const bite = document.querySelector('#bite')
const biteShort = document.querySelector('#biteshort')
const intro = document.querySelector('.intro')
const container = document.querySelector('.container')
const fullApple = document.querySelector(".fullapple")
const halfApple = document.querySelector(".halfapple")

let circles = document.querySelectorAll('.circle')
let scoreTally = document.querySelector('.score-tally')
let score = 0
let arr = []
let userArr = []

scoreTally.innerHTML = score

fullApple.addEventListener("click", function () {
  fullApple.classList.add('hidden')
  halfApple.classList.remove('hidden')
  bite.play()
  setTimeout(() => { halfApple.classList.add('fullzoom') }, 1000)
  setTimeout(() => { container.classList.remove('hidden') }, 1200)
  setTimeout(() => { intro.style.display = 'none' }, 1500)
  setTimeout(() => {
    appContainer.classList.remove('blocked')
    newGame()
  }, 1400)
  setTimeout(() => {
    nextRound()
  }, 1800)
})

startButton.addEventListener("click", function () {
  appContainer.classList.remove('blocked')
  newGame()
  nextRound()
  biteShort.play()
})

for (let i = 0; i < app.length; i++) {
  app[i].addEventListener("click", function () {
    app[i].classList.add('activated')
    let choice = app[i].dataset.apps
    selectApp(choice)
    userArr.push(choice)
    userRound()
    setTimeout(() => { app[i].classList.remove('activated') }, 300)
  })
}

function resetGame() {

  score = 0
  arr = []
  userArr = []

  for (let k = 0; k < circles.length; k++) {
    circles[k].style.display = 'none'
    circles[k].innerHTML = ''
    circles[k].dataset.num = ''
  }

  startButton.style.display = 'initial'
  title.innerHTML = 'Game Over'
  gameOver.play()
  footer.style.display = 'none'
}

function newGame() {
  startButton.style.display = 'none'
  footer.style.display = 'initial'
  title.innerHTML = 'Watch'
}

function clearNotifications() {
  for (let k = 0; k < circles.length; k++) {
    circles[k].style.display = 'none'
    circles[k].innerHTML = ''
    circles[k].dataset.num = ''
  }
}

function nextPing() {
  const apps = ['instagram', 'facebook', 'twitter', 'tiktok'];
  const randomApp = apps[Math.floor(Math.random() * apps.length)];
  return randomApp;
}

function selectApp(x) {
  document.querySelector(`[data-sound='${x}']`).play()

  for (let j = 0; j < circles.length; j++) {
    if (circles[j].dataset.ping == `${x}`) {
      if (circles[j].style.display !== 'flex') {
        circles[j].dataset.num = 1
        circles[j].innerHTML = circles[j].dataset.num
        circles[j].style.display = 'flex'
      }
      else {
        circles[j].innerHTML = parseInt(circles[j].dataset.num) + 1
        circles[j].dataset.num = circles[j].innerHTML
      }
    }
  }
}


function steveRound() {

  console.log(arr)

  title.innerHTML = 'Watch'

  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      selectApp(arr[i])
    }, 800 * (i + 1));
  }

}


function userRound() {

  let index = userArr.length - 1;

  if (userArr[index] !== arr[index]) {
    resetGame()
    return
  }

  if (userArr[index] === arr[index] && userArr.length === arr.length) {
    title.innerHTML = "Success!"
    setTimeout(() => { nextRound() }, 1000);
    return
  }

}


function nextRound() {

  score += 1
  scoreTally.innerHTML = score
  userArr = []
  appContainer.classList.add('blocked')
  clearNotifications()
  arr.push(nextPing())
  steveRound()
  setTimeout(() => {
    clearNotifications()
    title.innerHTML = 'Repeat'
    appContainer.classList.remove('blocked')
  }, score * 800 + 1000)

}

