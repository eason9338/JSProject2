let roads;
let scooter;

let width = 1250;
let height = 690;

let scooterX = width / 2;
let scooterY = height - 180;
let laneNum = 1;
let laneWidth = 320;
let lanesX = [scooterX - laneWidth, scooterX, scooterX + laneWidth];

function preload() {
   
    let scaledImages = [];
    for (let i = 1; i <= 4; i++) {
        scaledImages.push(loadAndScaleImage('images/Gaming/roads/road' + i + '.png', 0.18));
    }
    roads = loadAnimation(scaledImages[0], scaledImages[1], scaledImages[2], scaledImages[3]);

    //imageMode(CENTER);
    scooter = createSprite(scooterX, scooterY);
    scooter.addImage(loadAndScaleImage('images/BeginScene/Scooter.png', 0.13));
}

function setup() {
    createCanvas(width, height);

}

function draw() {
    background(120);
    let roadX = width / 2;
    let roadY = height / 2 + 100;
    drawSprites();
    animation(roads, roadX, roadY);

}

function keyPressed() {
    if(keyCode === LEFT_ARROW && laneNum != 0){
        laneNum -= 1;
        scooter.position.x = lanesX[laneNum];
        console.log(laneNum);
    }else if(keyCode === RIGHT_ARROW && laneNum != 2){
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
