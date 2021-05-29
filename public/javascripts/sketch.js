// Your code will go here
// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.

let mobilenet;
let video;
let label;

function modelReady() {
    console.log('Model is ready!');
    mobilenet.predict(gotResults);
}

function setup() {
    createCanvas(800, 750);
    textSize(width / 3);
    textAlign(LEFT);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
    
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        label = results[0].label;
        mobilenet.predict(gotResults);
    }
}

function draw() {
    background(0);
    image(video, 0, 0);
    fill('#cecece');
        textSize(64); 
        text (label, 10, height -100);
}