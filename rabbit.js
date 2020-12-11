var rabbit;
var carrot;
var brick1;
var brick2;
var brick3;
var score=0;
function preload() {
    bunnyImage=loadImage(bunny.png)
    snakeImage=loadImage(snake.png)
    parkImage=loadImage(park.jpg)
}
function setup() {createCanvas(800,800); 
    rabbit= createSprite(54,54,35,35);
    carrot= createSprite(700,700,35,35);
    brick1= createSprite(400,100,100,20);
    brick2= createSprite(100,300,100,20);
    brick3= createSprite(250,500,100,20);
    park=   createSprite(400,400,800,800)
    snakeGroup=newGroup();
    rabbit.shapeColor="white"
    carrot.shapeColor="orange"
    brick1.shapeColor="red"
    brick2.shapeColor="red"
    brick3.shapeColor="red"
    } 
function draw() { background("green");
                brick1.bounceoff(edge[0])
                brick1.bounceoff(edge[1])
                brick2.bounceoff(edge[0])
                brick2.bounceoff(edge[1])
                brick3.bounceoff(edge[0])
                brick3.bounceoff(edge[1])

                brick1.velocityX=-5;
                brick2.velocityX=5;
                brick3.velocityX=-5;
                if(keyDown("up")){rabbit.Y=rabbit.Y-3;}
                if(keyDown("down")){rabbit.Y=rabbit.Y+3;}
                if(keyDown("left")){rabbit.X=rabbit.X-3;}
                if(keyDown("right")){rabbit.X=rabbit.X+3;}
                random([6][9])

                rabbit.addImage(bunnyImage);
                snake.addImage(snakeImage);
                park.addImage(parkImage);
                rabbit.scale=(8,10)
                snake.scale=(4,8)
                function snakeGroup() {
                    if(frameCount % 30===0)
                    {console.log(frameCount)}
                    var snake= createSprite(600,random(70,520),random(30,120),5);
                    snake.shapeColor="yellow" ;
                    snake.velocityX=random
                    snake.velocityY=random
                    snakeGroup.add(snake)
                }

                for(var i=0 ;i< (snakeGroup).lenght ;i++){
                    var temp= (snakeGroup). get(i) ;
                    if (rabbit.isTouching(temp)){
                        rabbit.x=54;
                        rabbit.y=54;
                    }
                }    
                if(rabbit.isTouching(carrot)){Text("You Won")}
                if(rabbit.isTouching(brick1)){brick1.velocityX=0; Text("You Lose")}
                if(rabbit.isTouching(brick2)){brick2.velocityX=0; Text("You Lose")}
                if(rabbit.isTouching(brick3)){brick3.velocityX=0; Text("You Lose")}
                }
                textSize(20);
                text("snakes destroyed:"+score,750,50)
               