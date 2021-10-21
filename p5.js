function preload(){

}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=creatcapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
fill('red')
ellipse(mouseX, mouseY, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.png'); 
}
