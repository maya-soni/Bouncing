# Bouncing
let dx,dy
let moon
let SPEED=5
function setup() {
  createCanvas(400, 400)
  moon = createmoon (width/2, height/2, 50)
  ellipseMode(RADIUS)
}

function draw() {
  background(0,0,139)
  drawmoon(moon)
  movemoon(moon)
}
function createmoon(x,y,r) {
  let moon = {}
moon.x = x
  moon.y = y
  moon. r = r
  moon.dx = random (-1,1)
  moon.dy = random (-1,1)
  return moon
}
function movemoon(moon) {
  moon.x = moon.x + moon.dx
  moon.y = moon.y + moon.dy
}
function drawmoon (moon) { fill ("white")
 ellipse (moon.x,moon.y,moon.r,moon.r)     
}
function UpdateShape(moon) {
  
}
  if (moon.x + moon.radius > width) { console.log ("right")
}
if (moon.y + moon.radius > height) { console.log ("bottom")}
if (ball.x-ball.radius > 0) { console.log ("left")}
if (ball.y-ball.radius > 0) {console.log ("top")}
