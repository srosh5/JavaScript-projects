let number = document.getElementById('number');
let counter = 0;

setInterval(() => {
  if (counter == 66) {
    clearInterval;
  } else {
    number.innerHTML = counter + '%';
    counter++;
  }
}, 29)