let roads = [];

function preload() {
    // // Step 2: Load the airplane image
    // plane = createSprite(100, 200);
    // plane.addImage('plane', loadImage('images/plane.jpg'));
    // plane.addImage('explode', loadImage('images/exp.png'));

    // mountains[0] = createSprite(600, 350);
    // mountains[0].addImage(loadImage('images/m4.png'));
    // mountains[1] = createSprite(100, 400);
    // mountains[1].addImage(loadImage('images/m1.png'));
    // mountains[2] = createSprite(300, 450);
    // mountains[2].addImage(loadImage('images/m3.png'));
    // mountains[3] = createSprite(450, 500);
    // mountains[3].addImage(loadImage('images/m2.png'));

    // // Step 5: Load the mountain images
    for(let i = 1; i < 5; i++) {
        roads[i] = createSprite(600, 200);
        let a = "images/Gaming/roads/road" + i + '.png';

        roads[i].addImage(loadImage(a));
    }
}

function setup() {
    createCanvas(1250, 691);
    // // Step 5: set the velocity for the mountain images
    // mountains[0].setVelocity(-0.6, 0);
    // mountains[1].setVelocity(-0.1, 0);
    // mountains[2].setVelocity(-1.4, 0);
    // mountains[3].setVelocity(-1.8, 0);
}

function draw() {
    background(120);
    // // Step 3: add keyboard commands to control the airplane
    // if(keyIsDown(UP_ARROW)) {
    //     plane.setVelocity(0, -2);
    // }else if(keyIsDown(DOWN_ARROW)) {
    //     plane.setVelocity(0, 2);
    // }else if(keyIsDown(LEFT_ARROW)) {
    //     plane.setVelocity(-2, 0);
    // }else if(keyIsDown(RIGHT_ARROW)) {
    //     plane.setVelocity(2, 0);
    // }else {
    //     plane.setVelocity(0, 0);
    // }


    // for (let i = 0;i < mountains.length;i++) {
    //     // Step 5: add code here to detect (add adjust) the mountains positions
    //     if(mountains[i].position.x <= 0) {
    //         mountains[i].position.x = 800;
    //     } 
        
    //     // Step 6: add code here to detect the collision between plane and the mountains and to change the image if a collision is detected
    //     if (mountains[i].overlap(plane)) {
    //         plane.changeImage('explode');
    //         break;
    //     } else {
    //         plane.changeImage('plane');
    //     }
       

    // }

    drawSprites();
}

function mouseClicked() {
    // // Step 4: add code here to fire the machine gun
    // let s = createSprite(plane.position.x, plane.position.y, 10, 10);
    // s.setVelocity(3, 0);
    // s.life = 150;
}
