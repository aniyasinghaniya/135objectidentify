x = ""
function preload(){
    x=createVideo("vid.mp4")
 
}
function setup(){
 canvas=createCanvas(600,600)
 cavas.center()
 x.hide()
}
function draw(){
 image(x,0,0,600,600)
}