// Recuperar el elemento canvas:
const canvas = document.getElementById('main-canvas')
// Dibujar con el contexto 2D:
const ctx = canvas.getContext('2d')

let initialX
let initialY

const dibujar = (x, y) => {
  ctx.beginPath()
  ctx.moveTo(initialX, initialY)
  ctx.lineWidth = 15
  ctx.strokeStyle = '#09f'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.lineTo(x, y)
  ctx.stroke()

  initialX = x
  initialY = y
}

const mouseDown = e => {
  initialX = e.offsetX
  initialY = e.offsetY
  dibujar(initialX, initialY)
  canvas.addEventListener('mousemove', mouseMoving)
}

const mouseMoving = e => {
  dibujar(e.offsetX, e.offsetY)
}

const mouseUp = e => {
  canvas.removeEventListener('mousemove', mouseMoving)
}

canvas.addEventListener('mousedown', mouseDown)
canvas.addEventListener('mouseup', mouseUp)
