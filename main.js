song1="";
song2="";
leftwrX=0;
rightwrX=0;
leftwrY=0;
rightwrY=0;
scoreLeftwrist=0;
staus="";

function preload(){
    song1=loadSound("Legends Never Die.mp3");
    song2=loadSound("Beliver.mp3");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}

function modelloaded(){
console.log("Pose Net Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        right_wr_x=results[0].pose.rightWrist.x;
        right_wr_y=results[0].pose.rightWrist.y;
        console.log("X position of right wrist is "+right_wr_x+" y position of right wrist is "+right_wr_y);

        left_wr_x=results[0].pose.leftWrist.x;
        left_wr_y=results[0].pose.leftWrist.y;
        console.log("X   Position of left wrist is "+left_wr_x+" And Y Position is "+left_wr_y);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("Score of Left Wrist = "+scoreLeftWrist);
    }

}

function draw(){
image(video,0,0,300,300);
}