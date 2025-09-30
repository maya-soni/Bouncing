let moons ={}
let bloodmoon={}
let moon={}
let dx,dy
let initialNumberofMoons = 2

const SPEED=-1.1
const MOON_SIZE_MIN= 10
const MOON_SIZE_MAX= 50

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

for( let moon of moons ) { // for each loop (loop over every item)
    drawmoon(moon)
    updatemoon(moon)
  drawmoon(bloodmoon)
  updatemoon(bloodmoon)
   }

for (let i = 0; i < moons.length-1; i++) {
  
}
for( let j = i+1; j < moons.length; j++ ) {
      bouncemoons(moons[i], moons[j])
    }  

function moonsCollide (moon, bloodmoon) { return dist(moon.x, moon.y, bloodmoon.x, bloodmoon.y)<= moon.r + bloodmoon.r
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
function drawmoon (bloodmoon) { fill ("red")
    ellipse (moon.x, moon.y,moon.r,moon.r)                          }

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
