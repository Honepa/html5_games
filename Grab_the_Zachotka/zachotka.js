var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;
var leftPress = false;
var rightPress = false;
x_zach = x - 100;
y_zach = canvas.height - 50;
var dx = x_zach
function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPress = false;

        console.log(dx);
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {

      leftPress = false;

        console.log(dx);
    }

}

function keyDownHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight")
  {
    rightPress = true;

  }
  else if(e.key == "Left" || e.key == "ArrowLeft")
  {
        leftPress = true;
  }
}


function draw_zachotka() {
  ctx.beginPath();
  ctx.rect(dx, y_zach, 200, 50);
  ctx.fillStyle = "#00FF00";
  ctx.fill();
  ctx.closePath();

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw_zachotka();
  if(leftPress)
  {
    dx -= 10;
  }
  if(rightPress)
  {
    dx += 10;
  }
  if(dx >= 598)
  {
    dx = 598;
  }
  if(dx <= 0)
  {
    dx = 0;
  }
}

setInterval(draw, 10);
