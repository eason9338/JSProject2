let roads;
let scooter;
let car;
let cars = [];

let width = 1250;
let height = 690;

let scooterX = width / 2;
let scooterY = height - 100;
let laneNum = 1;
let laneWidth = 320;
let carLaneWidth = 180;
let lanesX = [scooterX - laneWidth, scooterX, scooterX + laneWidth];

let hp = 5;
let hpImage = [];

function preload() {
   
    let scaledImages = [];
    for (let i = 1; i <= 4; i++) {
        scaledImages.push(loadAndScaleImage('images/Gaming/roads/road' + i + '.png', 0.18));
    }
    roads = loadAnimation(scaledImages[0], scaledImages[1], scaledImages[2], scaledImages[3]);

    //imageMode(CENTER);
    scooter = createSprite(scooterX, scooterY);
    scooter.addImage(loadAndScaleImage('images/BeginScene/Scooter.png', 0.08));

    carImage = loadAndScaleImage("images/Gaming/barriers/indianTruck.png", 0.05);

    for(let i = 1; i <= 5; i++) {
        path
    }

}

function setup() {
    createCanvas(width, height);

}

function draw() {
    background(120);
    let roadX = width / 2;
    let roadY = height / 2 + 100;
    animation(roads, roadX, roadY);

    drawSprites();

    if(frameCount % 60 == 0) {
        createCar();
    }

    for(let i = cars.length - 1; i >= 0; i--) {
        if(cars[i].position.y > height + 100) {
            cars[i].remove();
            cars.splice(i, 1);
            console.log("car deleted");
        }
    }
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

function createCar() {
    let carLane = [scooterX - carLaneWidth, scooterX, scooterX + carLaneWidth];
    let laneIndex = floor(random(0, carLane.length));
    let car = createSprite(carLane[laneIndex], -50, 200, 200);
    car.addImage(carImage);
    car.velocity.y = 5;

    let turnRadians = radians(15);
    switch(laneIndex){
        case 2:
            car.velocity.x = car.velocity.y * tan(turnRadians);
            break;
        case 0:
            car.velocity.x = car.velocity.y * tan(turnRadians * -1);
            break;
        default:
            break;
    }

    cars.push(car);
}