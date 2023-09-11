let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(function () {
  let currentTime = new Date();
  let currentHrs = currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  let currentSec = currentTime.getSeconds();

  currentHrs < 10 ? hrs.innerHTML = '0' + currentHrs : hrs.innerHTML = currentHrs;
  currentSec < 10 ? sec.innerHTML = '0' + currentSec : sec.innerHTML = currentSec;
  currentMin < 10 ? min.innerHTML = '0' + currentMin : min.innerHTML = currentMin;
}, 500);