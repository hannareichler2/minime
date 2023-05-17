
var images = $(".hidden");
var c = 0;
var audios = $(".sound");

$(document).click(function(e){
  console.log(e);
  var x = e.pageX;
  var y = e.pageY;
  if (c >= images.length) {
    c = 0;
  }
  var image = images[c];
  image.className = "";
  image.style.top = y - image.clientHeight * 0.5 + "px";
  image.style.left = x - image.clientWidth * 0.5 + "px";
  var audio = audios[c];
  audio.play();
  c++;
});
