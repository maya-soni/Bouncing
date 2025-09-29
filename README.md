# Bouncing
let moon ={}
let dx,dy
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
  UpdateShape(moon)
}
 function createmoon(x,y,r) {
  moon.x = x
  moon.y = y
  moon.r = r
  moon.dx = random (-1,1)
  moon.dy = random (-1,1)
  return moon 
 }
  
function drawmoon (moon) { fill ("white")
 // console.log(moon)
 ellipse (moon.x,moon.y,moon.r,moon.r)     
}

function UpdateShape(moon) {
if (moon.x + moon.r > width) { moon.dx *=-1.1}
if (moon.y + moon.r > height) { moon.dy *=-1.1}
if (moon.x-moon.r < 0) { moon.dx *=-1.1}
if (moon.y-moon.r < 0) {moon.dy *=-1.1}
}

// function createmoonAt(position) { 
// let moon = {} 
//   fill ('white')
//   moon.position=position
//   moon.velocity= {
//     x: random (-SPEED,SPEED),
//     y:random (-SPEED,SPEED)
//   }
// return moon
// }

function movemoon(moon) {
  moon.x = moon.x + moon.dx
  moon.y = moon.y + moon.dy
}    


