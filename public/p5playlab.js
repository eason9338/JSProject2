let roads;

function preload() {
   
    let scaledImages = [];
    for (let i = 1; i <= 4; i++) {
        scaledImages.push(loadAndScaleImage('images/Gaming/roads/road' + i + '.png', 0.18));
    }
    roads = loadAnimation(scaledImages[0], scaledImages[1], scaledImages[2], scaledImages[3]);
}

function setup() {
    createCanvas(1250, 691);

}

function draw() {
    background(120);
        let centerX = width / 2;
    let centerY = height / 2 + 100;
    drawSprites();
    animation(roads, centerX, centerY);
}

function mouseClicked() {
    
}

function loadAndScaleImage(path, scale) {
    let img = loadImage(path, (loadedImage) => {
        loadedImage.resize(loadedImage.width * scale, loadedImage.height * scale);
    });
    return img;
}
