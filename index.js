const canvas = document.getElementById('matrix')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const katakana =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'

const alphabet = katakana + latin + nums

const fontSize = 16
const columns = canvas.width / fontSize

// create an array to store raindrops
let drops = []
// loop to create drops
for (let i = 0; i < columns; i++) {
  drops[i] = 1
}

function draw() {
  // set background color as transparent black
  context.fillStyle = 'rgba(0, 0, 0, 0.05)'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = '#0F0'
  context.font = fontSize + 'px monospace'
  for (let i = 0; i < drops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    context.fillText(text, i * fontSize, drops[i] * fontSize)

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    }
    drops[i]++
  }
}

setInterval(draw, 30)
