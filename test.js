var imageScaleFactor = 0.5;
var outputStride = 16;
var flipHorizontal = false;
//var imgSrc = 'https://uploads5.wikiart.org/temp/5884b62e-11a4-40e0-bbaa-b02a6ea9d6a7.jpg!PinterestLarge.jpg';
var imgSrc = 'https://raw.githubusercontent.com/williamngan/pts/master/demo/more/tfjs_posenet/img/sample.png';
//var imgSrc = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11053747.jpg';
var w,h;

var imageElement = new Image();
imageElement.crossOrigin = "";
imageElement.src = imgSrc;
imageElement.onload = function(){
   w = imageElement.naturalWidth;
   h = imageElement.naturalHeight;
}

posenet.load().then(function(net){
  return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
}).then(function(pose){
  draw(pose.keypoints);
})

function setup() {
  noLoop();
}

function draw(keypoints) {
  createCanvas(w,h);
  background(0);
  noSmooth();

  // Draw white points
  stroke(255);

  for(var i in keypoints){
    strokeWeight(4);
    point(keypoints[i].position.x,keypoints[i].position.y);
  }
}
