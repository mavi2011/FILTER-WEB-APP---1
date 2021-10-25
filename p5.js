faceX=0;
faceY=0;
function preload(){
mustache_on_face=loadImage('https://i.postimg.cc/zBSNZQcy/unnamed.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
   video=createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   poseNet=ml5. poseNet(video. modelLoaded); 
   poseNet.on('pose', gotPoses); 
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache_on_face, faceX, faceY, 80,35);
}

function take_snapshot(){
    save('myFilterImage.png'); 
}

function modelLoaded()
{ 
    console.log("modelReady");
 }
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        faceX=results[0].pose.face.x -40;
        faceY=results[0].pose.face.y;
        console.log("face X = "+faceX);
        console.log("face Y = "+ faceY);
    }
}