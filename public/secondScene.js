let sounds = [];

function preload() {

    sounds.sad = createAudio('audios/sad.mp3');
    let scaleWidth = 1250 / 1970;
    let scaleHeight = 690 / 1314;
    let scale = min(scaleWidth, scaleHeight); // 選擇較小的縮放比例以保持圖片比例

    // 加載並縮放圖片
    let bg = createSprite(1250 / 2, 690 / 2); // 設定精靈位置為畫布中心
    bg.addImage(loadAndScaleImage('images/BeginScene/Recap/chatting.png', scale));


}

function setup() {

    createCanvas(2000, 690);


}

function draw() {

    sounds.sad.play();
    drawSprites();
    setTimeout(function() {
            window.location.href = 'scene3.html'; // 替換為你的下一個視窗的URL
    }, 10000); // 5000 毫秒後執行


}

function loadAndScaleImage(path, scale) {
    let img = loadImage(path, (loadedImage) => {
        loadedImage.resize(loadedImage.width * scale, loadedImage.height * scale);
    });
    return img;
}