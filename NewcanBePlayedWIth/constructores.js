//Constructor del área de juego
//este constructor delimita el tablero de juego y le asigna características
// lo declara, pero no lo imprime en la pantalla, eso se hace después.
function Board(){
  this.width = canvas.width;
  this.height = canvas.height;
  this.x = 0;
  this.y = 0;
  this.image = new Image();
  this.image.src= 'images/bg.png';

//este método le da la instrucción al programa de cargar la imagen en la pantalla
//aunque no la dibuja, porque para eso hay una función draw, creo.
  this.image.onload= function(){
    this.draw();
  }.bind(this);

//este método le indica a la computadora que dibuje la imagen
//los .this se refieren a que la imagen debe ser del tamaño del canvas
//ese tamaño lo indicamos previamente en el html
  this.draw = function(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
};

function Girl(){
  this.width = 100;
  this.height = 100;
  this.x = 100;
  this.y = 420;
  this.image = new Image ();
  this.image.src = 'images/girl.png';

  this.image.onload = function (){
    this.draw();
  }.bind(this);

  this.moveRight = function (){
    this.x +=30;
  }

  this.moveLeft = function (){
    this.x -=30;
  }

  this.draw = function (){
    //this.x++;
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
};


function EvilComputer(){
  this.width = 75;
  this.height = 75;
  this.x = 480;
  this.y = 10;
  this.image = new Image ();
  this.image2= new Image (450,450);
  this.image.src = 'images/evilcomputer.png';
  this.image2.src= 'images/boom.png';
  this.alive=true;

  this.image.onload = function (){
    this.draw();
  }.bind(this);

  this.moveRandom = function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  }

  this.draw = function (nuevaX){
    //this.x= this.moveRandom(0,canvas.width);

    if (this.alive){
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    } else {ctx.drawImage (this.image2, 300,40,this.image2.width,this.image2.height);
    }
  };

  this.isTouching = function (waterBottle){
    return  (this.x<waterBottle.x+waterBottle.width)&&
            (this.x+this.width>waterBottle.x)&&
            (this.y<waterBottle.y+waterBottle.height)&&
            (this.y+this.height>waterBottle.y);
}

  //this.image2.onload = function (){
    //this.draw2();
  //}.bind(this);

  this.draw2= function(nuevaX){
    //ctx.drawImage(this.image2,this.x,this.y,this.width,this.height);
  }
};

var fueguitoArray= []
fueguitoArray.push(new Fueguito(940,180));
fueguitoArray.push(new Fueguito(940,220));
fueguitoArray.push(new Fueguito(940,260));
fueguitoArray.push(new Fueguito(940,300));
fueguitoArray.push(new Fueguito(940,340));

function Fueguito(x,y){
  this.width = 40;
  this.height = 40;
  this.x = x;
  this.y = y;
  this.isVisible = false;
  this.image = new Image ();
 this.image.src = 'images/unnamed.png';

 this.image.onload = function (){
   this.draw ();
 }.bind (this);

 this.draw = function (){
   if (this.isVisible == true){
  ctx.drawImage (this.image, this.x, this.y, this.width, this.height);
   };
 }
};

//function GameEnd (){
  //this.width =;
  //this.height=;
  //this.x=;
  //this.y=;

//}

function JsIcon(){
  this.width = 50;
  this.height = 50;
  this.x = 300;
  this.y = 300;
  this.image = new Image ();
  this.image.src = 'images/JSicon.png';

  this.image.onload = function (){
    this.draw();
  }.bind(this);

  this.draw = function (){
    this.y++;
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
};

var bottlesArray = [];

function WaterBottle(){
this.width = 75;
this.height = 75;
this.x = girl.x;
this.y = girl.y;
this.image = new Image ();
this.image.src = 'images/waterBottle.png';

this.image.onload = function (){
  this.draw();
}.bind(this);

this.draw = function (){
  if(this.y+this.height<0){
    bottlesArray.splice(0,1);
  }
  this.y-=8;
  ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
}
bottlesArray.push(this);
};
