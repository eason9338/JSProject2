let roads;
let scooter;
let width = 1250;
let height = 690;

function preload() {
   
    let scaledImages = [];
    for (let i = 1; i <= 4; i++) {
        scaledImages.push(loadAndScaleImage('images/Gaming/roads/road' + i + '.png', 0.18));
    }
    roads = loadAnimation(scaledImages[0], scaledImages[1], scaledImages[2], scaledImages[3]);

    //imageMode(CENTER);
    scooter = createSprite(width / 2, height - 200);
    scooter.addImage(loadAndScaleImage('images/BeginScene/Scooter.png', 0.18));
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

    drawSprites();
}

function mouseClicked() {
    if(keyIsDown(LEFT_ARROW)){
        
    }
}

function loadAndScaleImage(path, scale) {
    let img = loadImage(path, (loadedImage) => {
        loadedImage.resize(loadedImage.width * scale, loadedImage.height * scale);
    });
    return img;
}
