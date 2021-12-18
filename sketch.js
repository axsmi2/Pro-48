var game1, game1Img, game2, game2Img, game3, game3Img;
var player1, player1Img, player2, player2img, player3, player3Img;
var w1Img, w2Img, w3Img, w4Img, w5Img, w6Img, w7Img, w8Img;
var bag, can1, can2, straw, net, chips, bottle1, bottle2;
var j1, j2, j3, j4, j5, j6, j7, j8, j9, j10;
var astroid, fireball, shark, sharkImg, eagle, log, fire, fish, octo;
var invisibleG;
var game1Obstacle;
var gameState= "intro";
var gameChoice;
var edges;
var score=9;
var game1ObstacleGroup;
var game2ObstacleGroup, game22ObstacleGroup;
var game3ObstacleGroup;
var enemy1ObstacleGroup;
var enemy2ObstacleGroup, enemy22ObstacleGroup;
var enemy3ObstacleGroup, enemy32ObstacleGroup;
var life=3;
var gameOver,gameOverImg;
var restart,restartImg;

function preload(){

game1Img= loadImage("images/yellow.jpg");
game2Img= loadImage("images/sea.png");
game3Img= loadImage("images/jungle.png");

gameOverImg= loadImage("images/gameover.png");
restartImg= loadImage("images/restart.png");

player1Img= loadImage("images/astronaut.png");
player2stopImg=loadAnimation("images/mowgli-1.png")
player2img= loadAnimation("images/mowgli-1.png","images/mowgli-2.png");
player3Img= loadImage("images/diver.png");

w1Img= loadImage("images/bag.png");
w2Img= loadImage("images/can.png");
w3Img= loadImage("images/can2.png");
w4Img= loadImage("images/straw.png");
w5Img= loadImage("images/net.png");
w6Img= loadImage("images/chips.png");
w7Img= loadImage("images/bottle.png");
w8Img= loadImage("images/bottle2.png");

j1=loadImage("images/Junk-01.png");
j2=loadImage("images/Junk-02.png");
j3=loadImage("images/Junk-03.png");
j4=loadImage("images/Junk-04.png");
j5=loadImage("images/Junk-05.png");
j6=loadImage("images/Junk-06.png");
j7=loadImage("images/Junk-07.png");
j8=loadImage("images/Junk-08.png");
j9=loadImage("images/Junk-09.png");
j10=loadImage("images/Junk-10.png");

shark=loadImage("images/shark.png");
astroid=loadImage("images/astroid.png");
fireball=loadImage("images/fireball.png");
eagle=loadImage("images/eagle.png");
log=loadImage("images/log.png");
fire=loadImage("images/fire.png");
fish=loadImage("images/fish1.png");
octo=loadImage("images/octopus.png");

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20);

invisibleG= createSprite(0,height/2+275,width,20);
invisibleG.visible=false;

game1= createSprite(width/4+420,height/2+150);
game1.scale=0.4;
game1.addImage(game1Img);

game2= createSprite(width/4+565,height/2-25);
game2.scale=0.4;
game2.addImage(game2Img);

game3= createSprite(width/4+265,height/2-25);
game3.scale=0.3;
game3.addImage(game3Img);

game1bag=createSprite(width/2,height/2);
game1bag.addImage(game1Img);
game1bag.visible=false;

game2bag=createSprite(width/2,height/2);
game2bag.addImage(game2Img);
game2bag.visible=false;

game3bag=createSprite(width/2,height/2);
game3bag.addImage(game3Img);
game3bag.visible=false;

player1= createSprite(width/4+350,height/2+165);
player1.scale=0.2;
player1.addImage(player1Img);

gameOver=createSprite(width/2,height/2);
gameOver.addImage(gameOverImg);
gameOver.scale=0.2
gameOver.visible=false;

restart=createSprite(width/2-300,height/2-600);
restart.addImage(restartImg);
restart.visible=false;


player2= createSprite(width/4+200,height/2-10);
player2.scale=0.2;
player2.addAnimation("stop",player2stopImg);
player2.addAnimation("moving",player2img);

player2img.visible=false;


player3= createSprite(width/4+525,height/2);
player3.scale=0.05;
player3.addImage(player3Img);

edges= createEdgeSprites();

game1ObstacleGroup= new Group();
game2ObstacleGroup= new Group();
game22ObstacleGroup= new Group();
game3ObstacleGroup= new Group();

enemy1ObstacleGroup= new Group();
enemy2ObstacleGroup= new Group();
enemy22ObstacleGroup= new Group();
enemy3ObstacleGroup= new Group();
enemy32ObstacleGroup= new Group();

/*bag= createSprite(width/2,height/2);
bag.scale=0.05;
bag.addImage(w1Img);

can1= createSprite(width/2,height/2);
can1.scale=0.05;
can1.addImage(w2Img);

can2= createSprite(width/2,height/2);
can2.scale=0.02;
can2.addImage(w3Img);

straw= createSprite(width/2,height/2);
straw.scale=0.01;
straw.addImage(w4Img);

net= createSprite(width/2,height/2);
net.scale=0.05;
net.addImage(w5Img);

chips= createSprite(width/2,height/2);
chips.scale=0.05;
chips.addImage(w6Img);

bottle1= createSprite(width/2,height/2);
bottle1.scale=0.05;
bottle1.addImage(w7Img);

bottle2= createSprite(width/2,height/2);
bottle2.scale=0.05;
bottle2.addImage(w8Img);*/

}

function draw(){



if(gameState==="intro"){
    background("teal");
fill("gold");
textSize(50);
text("CO-CLEAN",width/2-575,height/2-200);
fill("white");
textSize(25);
text("OPTIONS",width/2+200,height/2-200);
textSize(15);
text("designed by Asmi",width/2-575,height/2-175)
textSize(20);
//text("Select background",width/6+285,height/2+150)
text("Click to Choose",width/6+240,height/2-125)
text("Select speed",width/2+485,height/2-125)
fill("white");
textSize(100);
text("1x",width/2+500,height/2);
text("2x",width/2+500,height/2+125);
text("3x",width/2+500,height/2+250);
textSize(12);

/*text("Plastic is ubiquitous in our everyday lives.Some plastics we can reuse or recycle" ,40,150 );
text("and many play important roles in areas like medicine and public safety", 40,175);
text("but other items, such as straws, are designed for only one use." ,40,200);
text("In fact, more than 40 percent of plastic is used only once before it is thrown away, where it lingers in the environment for a long, long time. " ,40,225);
text("It often breaks down into smaller and smaller particles, called microplastics, which can be ingested by both animals and people. " ,40,50);
text(" Fortunately, there are things we can do to help—like stop using plastic bags, straws, and bottles, recycling when we can, and disposing of waste properly." ,40,50);
*/

//text("" ,50,50);
//text("" ,50,50);
//text("" ,50,50);
//text("" ,50,50);
//text("" ,50,50);
//text("" ,50,50);
//text("" ,50,50);
/*obstacleSpeed=1,2,3;
        switch(obstacleSpeed){
            case 1: game1Obstacles.velocityX=-3;
            break;
            case 2 : game1Obstacles.velocityX=-6;
            break;
            case 3: game1Obstacles.velocityX=-9;
        }*/
gameChoice=1,2,3;
switch(gameChoice){
    case 1: if(mousePressedOver(game1)){
        gameState="gamePlay1";
    }
    case 2: if(mousePressedOver(game2)){
        gameState="gamePlay2";
    }
    case 3: if(mousePressedOver(game3)){
        gameState="gamePlay3";
    }
}
}
drawSprites();

if(gameState=="gamePlay1"){
   // background(game1Img);
    game1bag.visible=true;
    game1bag.scale=1.75;
    game1.visible=false;
    game2.visible=false;
    game3.visible=false;
   // player1.visible=false;
    player2.visible=false;
    player3.visible=false;
    player1.x=width/2-400;
    player1.scale=0.4;

    fill("white");
    textSize(20);
    text("Score :"+score,50,50);
    text("Life:"+life,width-100,50);

    for(i=0;i<game1ObstacleGroup.length;i++){
        if (player1.isTouching(game1ObstacleGroup.get(i))){
            score=score+1;
            game1ObstacleGroup.get(i).destroy();
        }
    }

    for(i=0;i<enemy1ObstacleGroup.length;i++){
        if(player1.isTouching(enemy1ObstacleGroup.get(i))){
            life=life-1;
            enemy1ObstacleGroup.get(i).destroy();
        }
    }

    if(life==0){
        gameState="game1End";
    }

    if(score%10==0){
        game1bag.velocityX=-5;
        game1ObstacleGroup.velocityX+=4
    }
    
   /* game1bag.velocityX=-7;
    console.log(windowWidth/2);

    if(game1bag.x<width/2){
        game1bag.x=width/4;
    }*/

    game1bag.velocityX=-3;
   // console.log(windowWidth/2);

    if(game1bag.x<width/2){
        game1bag.x=width/4+500;
    }
  
    
    if(keyDown("up")){
    player1.velocityY=-2;
   //player1.y=player1.y-2;
    }

    if(keyDown("down")){
        player1.velocityY=+2;
       //player1.y=player1.y-2;
        }
        player1.bounceOff(edges[2]);
        player1.bounceOff(edges[3]);
        game1Obstacle();
        enemy1Obstacle();

}

if(gameState=="game1End"){
    game1bag.velocityX=0;
    enemy1ObstacleGroup.setVelocityXEach(0);
    game1ObstacleGroup.setVelocityXEach(0);
    gameOver.visible=true;
    restart.visible=true;
    player1.velocityY=0;
}

if(mousePressedOver(restart)){
    game1reset();
  }

if(gameState=="game1reset"){
    gameOver.visible=false;
    restart.visible=false;
    life=3;
    gameState=gamePlay1;
}

if(gameState=="gamePlay2"){
   // background(game2Img)
    game2bag.visible=true;
    game2bag.scale=2.10;
    game1.visible=false;
    game2.visible=false;
    game3.visible=false;

    player2.visible=false;
    player1.visible=false;
    player3.x=width/2-400;

    player3.scale=0.125;

    fill("white");
    textSize(20);
    text("Score :"+score,50,50);
    text("Life:"+life,width-100,50);

    game2bag.velocityX=-3;
    //console.log(windowWidth/2);

    if(game2bag.x<width/2){
        game2bag.x=width/4+400;
    }

    for(i=0;i<game2ObstacleGroup.length;i++){
        if (player3.isTouching(game2ObstacleGroup.get(i))){
            score=score+1; 
            game2ObstacleGroup.get(i).destroy();
        }
    }

    for(i=0;i<game22ObstacleGroup.length;i++){
        if (player3.isTouching(game22ObstacleGroup.get(i))){
            score=score+1; 
            game22ObstacleGroup.get(i).destroy();
        }
    }

    for(i=0;i<enemy2ObstacleGroup.length;i++){
        if(player1.isTouching(enemy2ObstacleGroup.get(i))){
            life=life-1;
            enemy2ObstacleGroup.get(i).destroy();
        }
    }

    if(life==0){
        gameState="game2End";
    }

    if(score%10==0){
       
        game2ObstacleGroup.velocityX+=4
    }

    if(keyDown("up")){

        player3.velocityY=-2;
        }

    if(keyDown("down")){
     player3.velocityY=+2;
    }
    
    player3.bounceOff(edges[2]);
    player3.bounceOff(edges[3]);
    game2Obstacle();
    game22Obstacle();
    enemy2Obstacle();
    }

    if(gameState=="game2End"){
        game2bag.velocityX=0;
        enemy2ObstacleGroup.setVelocityXEach(0);
        game2ObstacleGroup.setVelocityXEach(0);
        gameOver.visible=true;
        restart.visible=true;
    //
        player3.velocityY=0;
    }

if(gameState=="gamePlay3"){
    // background("red")

        invisibleG.visible=false;

        game3bag.visible=true;
        game3bag.scale=1.4;
        game1.visible=false;
        game2.visible=false;
        game3.visible=false;
    
      

        player3.visible=false;
        player1.visible=false;
        player2.x=width/2-400;
    
        player2.scale=0.6;

        player2.collide(invisibleG);

        fill("white");
        textSize(20);
        text("Score :"+score,50,50);

        console.log(player2.y)

        if(game3bag.x<width/2){
            game3bag.x=width/4+400;
        }

        for(i=0;i<game3ObstacleGroup.length;i++){
            if (player2.isTouching(game3ObstacleGroup.get(i))){
                score=score+1; 
                game3ObstacleGroup.get(i).destroy();
            }
        }
    
        if(score%10==0){
            game3bag.velocityX=-5;
            game3ObstacleGroup.velocityX+=4
        }
        
        game3bag.velocityX=-3;
       // console.log(windowWidth/2);
    
    
       if(keyDown("up")&& player2.y>420){
            player2.velocityY=-15;
            player2.changeAnimation("moving",player2img);
            }
      //  player2.changeAnimation("stop",player2stopImg);
            player2.velocityY+=0.5;
    

       
       
       
        //if(keyDown("down")){
        //player2.velocityY=+2;
        //}
        
       // player2.bounceOff(edges[2]);
      //  player2.bounceOff(edges[3]);
        game3Obstacle();
        enemy3Obstacle();
        //enemy32Obstacle();
        }

        
}

function game1Obstacle(){
  if(frameCount%100==0){
        game1Obstacles=createSprite(width/2+500,height/2+100);
        game1Obstacles.velocityX=-3;
        game1Obstacles.y=Math.round(random(height/2-600,height/2+600));
        var num=Math.round(random(1,10));

        
        switch(num){
            case 1: game1Obstacles.addImage(j1);
            break;
            case 2: game1Obstacles.addImage(j2);
            break;
            case 3: game1Obstacles.addImage(j3);
            break;
            case 4: game1Obstacles.addImage(j4);
            break;
            case 5: game1Obstacles.addImage(j5);
            break;
            case 6: game1Obstacles.addImage(j6);
            break;
            case 7: game1Obstacles.addImage(j7);
            break;
            case 8: game1Obstacles.addImage(j8);
            break;
            case 9: game1Obstacles.addImage(j9);
            break;
            case 10: game1Obstacles.addImage(j10);
            break;
        }
        game1Obstacles.scale=1.5;
        game1ObstacleGroup.add(game1Obstacles);
   }
}

function game2Obstacle(){
    if(frameCount%90==0){
          game2Obstacles=createSprite(width/2+500,height/2+500);
          game2Obstacles.velocityX=-3;
          game2Obstacles.y=Math.round(random(height/2-600,height/2+600));
          var num=Math.round(random(1,5));
          switch(num){
              case 1: game2Obstacles.addImage(w1Img);
              break;
              case 2: game2Obstacles.addImage(w5Img);
              break;
              case 3: game2Obstacles.addImage(w6Img);
              break;
              case 4: game2Obstacles.addImage(w7Img);
              break;
              case 5: game2Obstacles.addImage(w8Img);
              break;
          }
          game2Obstacles.scale=0.12;
          game2ObstacleGroup.add(game2Obstacles);
     }

    }

    function game22Obstacle(){
        if(frameCount%180==0){
              game22Obstacles=createSprite(width/2+500,height/2+500);
              game22Obstacles.velocityX=-3;
              game22Obstacles.y=Math.round(random(height/2-600,height/2+600));
              var num=Math.round(random(1,2));
              switch(num){
                  case 1: game22Obstacles.addImage(w2Img);
                  break;
                  case 2: game22Obstacles.addImage(w3Img);
                  break;
              }
              game22Obstacles.scale=0.03;
              game22ObstacleGroup.add(game22Obstacles);
         }
    
        }

    function game3Obstacle(){
        if(frameCount%80==0){
              game3Obstacles=createSprite(width/2+500,height/2+100);
              game3Obstacles.velocityX=-3;
             game3Obstacles.y=Math.round(random(height/2-400,height/2+200));
              var num=Math.round(random(1,6));
             
              switch(num){
                  case 1: game3Obstacles.addImage(w1Img);       
                  break;
                  case 2: game3Obstacles.addImage(w2Img);
                //  game3Obstacle.scale=0.1
                  break;
                  case 3: game3Obstacles.addImage(w3Img);
                 // game3Obstacle.scale=0.1
                  break;
                  case 4: game3Obstacles.addImage(w6Img);
                 // game3Obstacle.scale=0.1
                  break;
                  case 5: game3Obstacles.addImage(w7Img);
                 // game3Obstacle.scale=0.1
                  break;
                  case 6: game3Obstacles.addImage(w8Img);
                
                  break;
            
              }
             game3Obstacles.scale=0.1;
             game3ObstacleGroup.add(game3Obstacles);
         }
    
        }

        function enemy1Obstacle(){
            if(frameCount%175==0){
                enemy1Obstacles=createSprite(width/2+500,height/2+100);
                enemy1Obstacles.velocityX=-8;
                enemy1Obstacles.y=Math.round(random(height/2-300,height/2+300));
                  var num=Math.round(random(1,3));
                 
                  switch(num){
                      case 1: enemy1Obstacles.addImage(astroid);       
                      break;
                      case 2: enemy1Obstacles.addImage(fireball);
                      break;
                      case 3: enemy1Obstacles.addImage(fire);
                      break;
                     // case 4: enemy1Obstacles.addImage(w6Img);
                      //break;
                  }
                  enemy1Obstacles.scale=0.15;
                  enemy1ObstacleGroup.add(enemy1Obstacles);
             }
        
            }

            function enemy2Obstacle(){
                if(frameCount%120==0){
                    enemy2Obstacles=createSprite(width/2+500,height/2+100);
                    enemy2Obstacles.velocityX=-3;
                    enemy2Obstacles.y=Math.round(random(height/2-300,height/2+300));
                      var num=Math.round(random(1,3));
                     
                      switch(num){
                          case 1: enemy2Obstacles.addImage(shark);       
                          break;
                          case 2: enemy2Obstacles.addImage(fish);
                          break;
                          case 3: enemy2Obstacles.addImage(octo);
                          break;
                         // case 4: enemy2Obstacles.addImage(w6Img);
                          //break;
                      }
                      enemy2Obstacles.scale=0.1;
                      enemy2ObstacleGroup.add(enemy2Obstacles);
                 }
            
                }

                function enemy22Obstacle(){
                    if(frameCount%120==0){
                        enemy22Obstacles=createSprite(width/2+500,height/2+100);
                        enemy22Obstacles.velocityX=-3;
                        enemy22Obstacles.y=Math.round(random(height/2-300,height/2+300));
                        
                          enemy22Obstacles.addImage(shark);       
                          enemy22Obstacles.scale=0.1;
                          enemy22ObstacleGroup.add(enemy22Obstacles);
                     }
                
                    }

                function enemy3Obstacle(){
                    if(frameCount%150==0){
                        enemy3Obstacles=createSprite(width/2+500,height/2+225);
                        enemy3Obstacles.velocityX=-3;

                         
                          switch(num){
                              case 1: enemy3Obstacles.addImage(log);
                              break;
                              case 2: enemy3Obstacles.addImage(astroid);
                              break;
                             // case 4: enemy3Obstacles.addImage(w6Img);
                              //break;
                          }
                          enemy3Obstacles.scale=0.15;
                          enemy3ObstacleGroup.add(enemy3Obstacles);
                     }
                
                    }

                    function enemy32Obstacle(){
                        if(frameCount%150==0){
                            enemy32Obstacles=createSprite(width/2+500,height/2-300);
                            enemy32Obstacles.velocityX=-3;
                           enemy32Obstacles.y=Math.round(random(height/2-200,height/2-350));
                             ;
                             enemy32Obstacles.addImage(eagle);       
                              
                              enemy32Obstacles.scale=0.06;
                              enemy32ObstacleGroup.add(enemy32Obstacles);
                         }
                    
                        }