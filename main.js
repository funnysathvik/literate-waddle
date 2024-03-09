x=0;
y=0;
draw_circle="";
draw_rectangle="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function setup(){
    canvas = createCanvas(900,600);
}
function start(){
    document.getElementById("status").innerHTML = "Computer is Listening, Plz Begin Talking.";
    recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById('status').innerHTML = "You have said "+content;
if(content == "circle"){
    r = document.getElementById('radius').value;
    r = r+1;
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "started drawing circle";
    draw_circle = "set";
}
if(content == "rectangle"){
    w = document.getElementById('width').value;
    w = w+1;
    h = document.getElementById('height').value;
    h = h+1;
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "started drawing rectangle";
    draw_rectangle = "set";
}
}
function draw(){
 if(draw_circle == "set"){
    circle(x,y,r);
    document.getElementById('status').innerHTML = "circle has been drawn";
    draw_circle = "";
 } 
 if(draw_rectangle == "set"){
    rect(x,y,w,h);
    draw_rectangle = "";
    document.getElementById('status').innerHTML = "rectangle has been drawn";
 }
}