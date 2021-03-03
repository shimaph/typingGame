'use strict'

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc =0;
  }
  const words = [
    'bicorn',
    'gargoyle',
    'sphinx',
    'basilisk',
    'echidna',
    'carbunclo',
    'ouroboros'
  ]

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  function click() {
    let sound = new Audio('click.mp3');
    let sound2 = new Audio('click2.mp3');

    let t = 0;

    if (t === 0) {
      sound.play();
      t++;
    } else {
      sound2.play();
      t--;
    }
  }

  const target = document.getElementById('target');



  document.addEventListener('keydown', event => {
    if (isPlaying === true) {
      return;
    }
    if (event.keyCode === 32){
    isPlaying = true;
    startTime = Date.now();
    setWord();
  }
  })




    document.addEventListener('keydown', e => {
      if(e.key !== word[loc]) {
        return;
      }

      loc++;
      click();
      target.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
        if (words.length === 0) {

          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = 'Finished!\t' + elapsedTime + '\tseconds!';
          return;
        }
        setWord();
      }

  });


}
