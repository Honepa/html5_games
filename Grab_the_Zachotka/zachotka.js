var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext("2d");

var score = 0;
var speed = 2;
var x = getRandomX(0, canvas.width - 10);
var y = canvas.height/2;
var leftPress = false;
var rightPress = false;
x_zach = x - 100;
y_zach = canvas.height - 50;
var dx = canvas.width/2 - 100;
var y_el = 0;

function getRandomX(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPress = false;

        //console.log(dx);
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {

      leftPress = false;

        //console.log(dx);
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

function draw_element()
{
  ctx.beginPath();
  ctx.rect(x, y_el, 10, 10);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  //console.log("element");
}

function drawScore() {
    ctx.font = "16px 'Pixel'";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Очки: "+score, 8, 20);
}

function move_racket()
{
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

function chek_element() {
  if(y_el >= 455)
  {
    if((x >= dx) & (x <= dx + 200))
    {
      //console.log("new_ochko");
      score++;
    }
    else{
      //console.log("no_ochko");
      score--;
    }
    y_el = 0;
    x = getRandomX(0, canvas.width - 10);
  }
  else {
    y_el += speed;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw_element();
  draw_zachotka();
  move_racket();
  chek_element();
  drawScore();
  if(score >= 5)
  {
    //alert("end game!");
    speed = 5;
    if(score > 10)
    {
      speed = 7;
      if (score > 15) {
        speed = 10;
          if(score > 20)
          {
            speed = 12;
          }
      }
    }

  }
  if(score < 0)
  {
    alert("end game(");
    score = 0;
    window.location.reload();
  }
}

setInterval(draw, 10);
