leftWristX=0;
rigthWristX=0;
diffrence=0;

function setup(){
	video=createCapture(VIDEO);
	video.size(550,500);

	canvas=createCanvas(550,550);
	canvas.position(550,850);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotposes);

}
function modelLoaded(){
	console.log("model Loaded!");
}
function gotposes(results){
if(results.length>0){
	console.log(results);
	leftWristX=results[0].pose.leftWrist.x;
	rigthWristX=results[0].pose.rigthWrist.x;
	diffrence=floor(leftWristX-rigthWristX);
}
}
var name="My name";
function draw(){
	background("aquamarine");
	document.getElementById("text_size").innerHTML="Font Size of the text will be"+diffrence+"px";
	textSize(diffrence);
	fill("black");
	text(name,50,400);
	
}
function submit(){
	name=document.getElementById("text").value;
}
