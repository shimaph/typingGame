  console.log(enemies);

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];

    target.textContent = "";

    loc =0;

    if (word.length <= 4) {
      enemyFunc(enemies[0]);
    } else if (word.length <= 7) {
      enemyFunc(enemies[1]);
    } else if (word.length <= 9) {
      enemyFunc(enemies[2]);
    } else {
      enemyFunc(enemies[3]);
    }

      enemyName.textContent = word;
  }


  const words = [
    'legal',
    'uneconomical',
    'establish',
    'context',
    'communication',
    'express',
    'habit',
    'sleep',
    'text',
    'playmaking',
    'shadow'
  ]

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  let currentWord;




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

  const titleScreen = document.getElementById('titleScreen');
  const target = document.getElementById('target');
  const enemyName = document.getElementById('enemyName');
  const type = document.getElementById('type')
  const typed = document.getElementById('typed')



  document.addEventListener('keydown', event => {
    if (isPlaying === true) {
      return;
    }
    if (event.keyCode === 32){
    isPlaying = true;
    titleScreen.style.display = "none";
    ready();
    setTimeout(start, 1000);

    startTime = Date.now();
    setTimeout(setWord, 1000);
    setTimeout(move(isPlaying, isPlaying), 1000);
  }
  })




    document.addEventListener('keydown', e => {
      if(e.key !== word[loc]) {
        return;
      }

      loc++;
      click();
      enemyName.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length) {
          clearInterval(intervalIdfoward);

        if (words.length === 0) {
          const enemy = document.getElementById('enemy');
          enemy.style.display = "none";

          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          result.style.marginTop = ('300px');
          result.textContent = 'Finished!\t' + elapsedTime + '\tseconds!';
          return;
        }


        if (word.length <= 4) {
          enemies[0].alive = false;
        } else if (word.length <= 7) {
          enemies[1].alive = false;
        } else if (word.length <= 9) {
          enemies[2].alive = false;
        } else {
          enemies[3].alive = false;
        }




        setTimeout(setWord, 200);


        move(isPlaying);
      }

  });
