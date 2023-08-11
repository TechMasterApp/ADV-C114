noseX = 0
noseY = 0


function preload() {
    clownNose = loadImage("https://i.postimg.cc/jq1L1nh3/clownnose.png")
    clownHat = loadImage("https://i.postimg.cc/vm64bYHL/clownhat.png")
    clownFrill = loadImage("https://i.postimg.cc/2jT4mtNT/891-8919492-mini-costume-chiffon-striped-ruffle-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(1000, 725)
    canvas.position()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 1000, 725)
    image(clownNose, noseX + 100, noseY + 50, 125, 125)
    image(clownHat, noseX - 175, noseY - 400, 600, 400)
    image(clownFrill, noseX - 150, noseY + 100, 600, 500)
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