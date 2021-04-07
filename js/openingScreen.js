
const space = document.querySelector('.space');

let t = 0;
function blinkingInterval(){
  if(Boolean(isPlaying)) {
    clearInterval(intervalId);
    return;
  }

  if(t === 0) {
    space.style.color = "white";
    t++;
  } else {
    space.style.color = "gray";
    t--;
  }
}
intervalId = setInterval(blinkingInterval, 500)

function ready() {
  const ready = document.createElement('p');
  ready.textContent = "Ready?";
  const ground = document.createElement('div');
  const rs = document.querySelector('#readyScreen');
  rs.appendChild(ready);
  rs.appendChild(ground);
}
