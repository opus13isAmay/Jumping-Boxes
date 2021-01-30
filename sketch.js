var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(20,750),200,20,20);
    box.shapeColor = 'white'
    surface1 = createSprite(10,50,50,10);
    surface1.shapeColor = 'green';
    surface2 = createSprite(30,40,50,10);
    surface2.shapeColor = 'red';
    surface3 = createSprite(20,40,50,10);
    surface3.shapeColor = 'blue';
    surface4 = createSprite(10,50,50,10);
    surface4.shapeColor ='yellow';



    box.velocityY = 5;
    box.velocityX = 0.5;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    
    box.bounceOff(edges);
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    if (box.isTouching(surface1)) {
    box.shapeColor = 'green';
    }
    if (box.isTouching(surface2)) {
        box.shapeColor = 'red';
    }
    if (box.isTouching(surface3)) {
        box.velocityX = 0;
        box.velocityY = 0;
        music = stop();
    }
    if (box.isTouching(surface4)) {
        box.shapeColor = 'yellow';
    }





    
}
