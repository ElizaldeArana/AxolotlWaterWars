//este método le indica a la computadora que cree un botón "start button", y que
//lo imprima en la pantalla
window.onload = function(){
  welcomeBanner();
  document.getElementById("start-button").onclick = function(){
    startGame();
  };
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var intervalo1;
var intervalo2;
var frames =0;
var board = new Board();
var girl = new Girl();
var evilComputer = new EvilComputer();
//var waterBottle = new WaterBottle();
var jsIcon = new JsIcon();

function welcomeBanner(){
  var imagenfondo= new Image();
  imagenfondo.src = "images/blue.png";
  //document.getElementById("blue");
  //this.image2, 300,40,this.image2.width,this.image2.height
  imagenfondo.onload = function(){
    ctx.drawImage(imagenfondo, 50,30,900,450);
    ctx.font= "30px Arial";
    // Create gradient
    var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    // Fill with gradient
    ctx.fillStyle=gradient;
    ctx.fillText("1.Para empezar a jugar, presiona el botón de 'StartGame'.",100,120);
    ctx.fillText("2.La muñequita puede moverse hacia la izquierda y ", 175, 180);
    ctx.fillText ("la derecha utilizando las flechas.",235,220);
    ctx.fillText("3.La muñequita dispara botellas de agua al",175,280);
    ctx.fillText ("presionar la barra espaciadora.",235,320);
    ctx.fillText("4.Para ganar, debes alcanzar la computadora 6 veces.",100,400);
  }

//ctx.fillRect(10,85,800,330)
//ctx.fillStyle=pat;
//ctx.fill();

};

//helpers

function update(){
  frames++;
  board.draw();
  girl.draw();
  bottlesArray.forEach(function(waterBottle, indice){
    waterBottle.draw();
    if (evilComputer.isTouching(waterBottle)){
      bottlesArray.splice(indice,1);
      for(i=0; i < fueguitoArray.length; i++){
        if(!fueguitoArray[i].isVisible){
          fueguitoArray[i].isVisible=true;
          console.log("Frames:",frames);
          break;
        }
        if(fueguitoArray[fueguitoArray.length-1].isVisible){
          evilComputer.alive=false;
          stopGame();
//          evilComputer.draw2();
        }
      }
    }
  });
  fueguitoArray.forEach(function(fueguito){
    if(fueguito.isVisible){
        fueguito.draw();
    }
  });
  //jsIcon.draw();
  if(frames%100 == 0){
    evilComputer.x = evilComputer.moveRandom(0,canvas.width);
  }
  evilComputer.draw();
};

//function update2(){
//};

function startGame(){
  //startGame2();
  if(intervalo1>0) return;
  intervalo1 = setInterval (function(){
    update();
  },1000/60);
}

function stopGame(){
    clearInterval(intervalo1);
  };

//function startGame2(){
//if (intervalo2>0) return;
//intervalo2 = setInterval (function(){
//evilComputer.draw();
//},1000);
//};

addEventListener("keydown", function(event){
if (event.keyCode === 39){
  girl.moveRight();
  girl.draw();
}
if (event.keyCode === 37){
  girl.moveLeft();
  girl.draw();
}
if (event.keyCode === 32){
  new WaterBottle();
}
});
