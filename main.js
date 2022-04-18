
difference=0;
rwristX=0;
lwristX=0;
function setup(){
    video =createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550,550);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotresult);
}
function draw(){
    background("#00f7ff");

    document.getElementById("text_side").innerHTML = "width and height of a text will be ="+ difference +"px";
    textSize(difference)
    fill('#a600ff');
    text('Jeeni', 50, 400);
    
    
}

    function modelLoaded(){
        console.log('poseNet is Initialized!');
    }

    function gotresult(result){
        if(result.length > 0)
    {
        console.log(result);
        lwristX=result[0].pose.leftWrist.x;
        rwristx=result[0].pose.rightWrist.x;
        difference = floor(lwristX - rwristX);

        console.log("leftWrirstX = " + lwristX + " rightWristX = " + rwristX + "difference = " + difference);

    }
    }
