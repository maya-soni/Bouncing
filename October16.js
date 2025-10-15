let numberOfcircles = 2;
let circles = []
let bigCircle 

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS)
  bigCircle = {
    x: width/2, 
    y: height/2,
    r: 100
  }
  // populating the array
  while( circles.length < numberOfcircles ) {
    let theta = (TWO_PI/numberOfcircles)*circles.length
    circles.push({
      x: width/2 + 100 * cos(theta),
      y: height/2 + 100 * sin(theta),
      theta: theta,
      r: 10,
      ir: 100,
      c: color(random(256),random(256),random(256))
    })
  }
}

function draw() {
  background("darkblue")
  let bigCircleColor = color("#673AB7")

    // fill("#673AB7")
      // 
  for( let c of circles ) {
    //collision
    if( circlesCollide(bigCircle, c) ) {
      bigCircleColor = color(204,162,223)
    }
  }
  fill(bigCircleColor);
  circle(bigCircle.x, bigCircle.y, bigCircle.r)
  
  for( let c of circles ) {
    fill(c.c)
    circle(c.x, c.y, c.r)
    c.ir += random(-3,3)
    c.x = width/2 + c.ir * cos(c.theta)
    c.y = height/2 + c.ir * sin(c.theta)
  }
}
function circlesCollide(a,b) {
  return dist( a.x, a.y, b.x, b.y ) <= a.r + b.r  
}
