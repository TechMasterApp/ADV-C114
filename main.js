noseX = 0
noseY = 0


function preload() {
    clownNose = loadImage("https://i.postimg.cc/jq1L1nh3/clownnose.png")
    clownHat = loadImage("https://i.postimg.cc/vm64bYHL/clownhat.png")
}

function setup() {
    canvas = createCanvas(700, 525)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 700, 525)
    image(clownNose, noseX, noseY, 75, 75)
    image(clownHat, noseX - 250, noseY - 500, 600, 400)
}

function modelLoaded() {
    
}

function gotPoses(result) {
    if (result.length > 0) {
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
    }
}

function saveit() {
    save("ClownImage.png")
}