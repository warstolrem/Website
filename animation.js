
var context;
var x=100;
var y=200;
var dx=5;
var dy=9;
var ctx = c.getContext("2d");

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,12);
}

function draw()
{
  context.clearRect(0,0, 1800,1800);
  context.beginPath();
  context.fillStyle="#66FF66";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,22,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<0 || x>1400) dx=-dx; 
if( y<0 || y>200) dy=-dy; 
x+=dx; 
y+=dy;
}
