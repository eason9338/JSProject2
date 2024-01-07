let sounds = [];

function preload() {

    let scaleWidth = 1250 / 5472;
    let scaleHeight = 690 / 3648;
    let scale = min(scaleWidth, scaleHeight); // 選擇較小的縮放比例以保持圖片比例

    // 加載並縮放圖片
    let bg = createSprite(1250 / 2, 690 / 2); // 設定精靈位置為畫布中心
    bg.addImage(loadAndScaleImage('images/EndScene/Success.PNG', scale));
    sounds.win = createAudio('audios/win.mp3');

}

function setup() {

    sounds.win.play();
    createCanvas(2000, 690);
    startButton = {
        x: 500, // 按鈕的 x 坐標
        y: 340,  // 按鈕的 y 坐標
        w: 260, // 按鈕的寬度
        h: 270  // 按鈕的高度
    };

}

function draw() {

    drawSprites();
    fill(155, 150, 250, 0); // 設置按鈕顏色
    noStroke(); // 不要邊框
    rect(startButton.x, startButton.y, startButton.w, startButton.h, 20); // 繪製圓角矩形

}

function mousePressed() {
    // 檢查是否點擊了"START"按鈕
    if (mouseX > startButton.x && mouseX < startButton.x + startButton.w &&
        mouseY > startButton.y && mouseY < startButton.y + startButton.h) {
        // 切換到下一個視窗的代碼
        window.location.href = 'index.html'; // 替換為你的下一個視窗的URL
    }
}

function loadAndScaleImage(path, scale) {
    let img = loadImage(path, (loadedImage) => {
        loadedImage.resize(loadedImage.width * scale, loadedImage.height * scale);
    });
    return img;
}