var startButton = document.querySelector('.timer__start');
var clearButton = document.querySelector('.timer__clear');
var hoursText = document.querySelector('.timer__hours');
var minutesText = document.querySelector('.timer__minutes');
var secondsText = document.querySelector('.timer__seconds');
var msecondsText = document.querySelector('.timer__mseconds');
var timer = null;
var startTime = null;
var lastTime = 0;
startButton.addEventListener("click", startTimer);
clearButton.addEventListener("click", clearTimer);

function startTimer(){
  if(timer){
    clearInterval(timer);
    timer = null;
    var curTime = new Date();
    lastTime = curTime - startTime;
    startButton.innerHTML = 'Cont..';
  }
  else {
    startTime = new Date();
    timer = setInterval(updateTimer, 1);
    startButton.innerHTML = 'Pause';
  }
}

function clearTimer(){
  clearInterval(timer);
  timer = null;
  startTime = null;
  lastTime = 0;
  hoursText.innerHTML = '00';
  minutesText.innerHTML = '00';
  secondsText.innerHTML = '00';
  msecondsText.innerHTML = '000';
  startButton.innerHTML = 'Start';
}

function updateTimer(){
  var curTime = new Date();
  var difTime = curTime - startTime + lastTime;
  difTime = new Date(difTime);
  hours = difTime.getUTCHours() + '';
  minutes = difTime.getMinutes() + '';
  seconds = difTime.getSeconds() + '';
  mseconds = difTime.getMilliseconds() + '';
  if(hours.length < 2) hours = '0' + hours;
  if(minutes.length < 2) minutes = '0' + minutes;
  if(seconds.length < 2) seconds = '0' + seconds;
  hoursText.innerHTML = hours;
  minutesText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
  msecondsText.innerHTML = mseconds;
}