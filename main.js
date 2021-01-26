lWrist=""
rWrist=""

function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    lWrist = results[0].pose.leftWrist.x;
    rWrist = results[0].pose.rightWrist.x;
    sizeGrand = lWrist-rWrist
  }
}
function draw(){
clear()
textSize(lWrist-rWrist-100);
text('17 projects left(according to me)', 110, 300);


}
