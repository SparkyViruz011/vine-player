var video = document.getElementsById("video")
var playbutton = document.getElementsById("playbutton");
var loopbutton = document.getElementsById("loopbutton");
var fullscreenbutton = document.getElementsById("fullscreenbutton");
var isPlaying = false;
var isLooped = false;

video.RequestFullscreen =
video.RequestFullscreen ||
video.msRequestFullscreen ||
video.mozRequestFullscreen ||
video.webkitRequestFullscreen;


video.onended = function(e)
{
  if isLooped(!isLooped)
  {

  }
}
// this shit it's not ended ···










playbutton.click = function ()
{
  if (isPlaying)
  {
    isPlaying = false;
    playbutton.innerhtml = "Play";
    video.pause();
  }
  else
  {
      isPlaying = true;
      playbutton.innerhtml ="pause";
      video.play();
    }
};
