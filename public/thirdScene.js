let roads;
let scooter;
let obstacle;
let obstacles = [];

let width = 1250;
let height = 690;

let scooterX = width / 2;
let scooterY = height - 100;
let laneNum = 1;
let laneWidth = 320;

let obstacleLaneWidth = 180;
let obstacleImage = []
let lanesX = [scooterX - laneWidth, scooterX, scooterX + laneWidth];

let hp = 5;
let hpImage = [];

let gameTime = 10000;
let isGaming = true;
let endImage;

function preload() {
   
    let scaledImages = [];
    for (let i = 1; i <= 4; i++) {
        scaledImages.push(loadAndScaleImage('images/Gaming/roads/road' + i + '.png', 0.18));
    }
    roads = loadAnimation(scaledImages[0], scaledImages[1], scaledImages[2], scaledImages[3]);

    //imageMode(CENTER);
    scooter = createSprite(scooterX, scooterY);
    scooter.addImage(loadAndScaleImage('images/BeginScene/Scooter.png', 0.08));
    scooter.setCollider("rectangle", 0, 0, scooter.width * 0.8, scooter.height * 0.5);

    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/indianTruck.png", 0.05));
    for(let i = 1; i <= 3; i++) {
        obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/rock"+i+".png", 0.2));
    }
    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/greenLight.png", 0.10));
    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/redLight.png", 0.10));
    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/yellowLight.png", 0.10));
    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/cat.png", 0.15));
    obstacleImage.push(loadAndScaleImage("images/Gaming/barriers/branch.png", 0.15));


    for(let i = 1; i <= 5; i++) {
        let image = loadAndScaleImage("images/Gaming/health/" + i + "H.PNG", 0.22);
        hpImage.push(image);
    }

    endImage = loadAndScaleImage("images/EndScene/endScene.png", 0.2);
    setTimeout(function() {
        endScene = createSprite(width/2, -30);
        endScene.addImage(endImage);
        endScene.velocity.y = 2;
        for(let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].remove();
            obstacles.splice(i, 1);
        }
        isGaming = false;
    }, gameTime);



}

function setup() {
    createCanvas(width, height);

}

function draw() {
    background(120);
    let roadX = width / 2;
    let roadY = height / 2 + 100;
    animation(roads, roadX, roadY);
    
    image(hpImage[hp-1], 10, 10);
    console.log(hpImage[1]);

    drawSprites();

    if(frameCount % 60 == 0) {
        createObstacle(isGaming);
    }

    for(let i = obstacles.length - 1; i >= 0; i--) {
        if(obstacles[i].position.y > height + 100) {
            obstacles[i].remove();
            obstacles.splice(i, 1);
            console.log("obstacle deleted");
        }

        if(scooter.overlap(obstacles[i])){
            playerHit();
            obstacles[i].remove();
            obstacles.splice(i, 1);
        }
    }

    setTimeout(function(){
        window.location.href = 'scene6.html';
    }, 11500);
}

function keyPressed() {
    if(keyCode === 65 && laneNum != 0){
        laneNum -= 1;
        scooter.position.x = lanesX[laneNum];
        console.log(laneNum);
    }else if(keyCode === 68 && laneNum != 2){
        laneNum += 1;
        scooter.position.x = lanesX[laneNum];
        console.log(laneNum);
    }

    
}

function loadAndScaleImage(path, scale) {
    let img = loadImage(path, (loadedImage) => {
        loadedImage.resize(loadedImage.width * scale, loadedImage.height * scale);
    });
    return img;
}

function createObstacle(isGaming) {
    if(isGaming){
        let obstacleLane = [scooterX - obstacleLaneWidth, scooterX, scooterX + obstacleLaneWidth];
        let laneIndex = floor(random(0, obstacleLane.length));
        let obstacle = createSprite(obstacleLane[laneIndex], -50, 200, 200);
        obstacle.addImage(obstacleImage[floor(random(0, obstacleImage.length))]);
        obstacle.velocity.y = random(3, 7);

        let turnRadians = radians(15);
        switch(laneIndex){
            case 2:
                obstacle.velocity.x = obstacle.velocity.y * tan(turnRadians);
                break;
            case 0:
                obstacle.velocity.x = obstacle.velocity.y * tan(turnRadians * -1);
                break;
            default:
                break;
        }

        obstacles.push(obstacle);
    }else {
        
        return;
    }
    
}

function playerHit() {
    hp --;
    if(hp <= 0) {
        hp = 0;

        scooter.addImage("Explosion.PNG");
        setTimeout(function() {
            window.location.href = 'scene4.html';
        }, 1000);
    }
}