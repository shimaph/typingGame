'use strict'

{











  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];

    target.textContent = "";

    loc =0;

    switch (word) {
      case "slime":
        enemyFunc(slime);
        console.log("slimy");
        break;
      case "goblin":
        enemyFunc(goblin);
        console.log("gobling");
        break;
      case "lilith":
        enemyFunc(lilith);
        break;
      case "lizardman":
        const img = document.getElementById('enemyImg');
        enemyFunc(lizardman);
        break;
      default:
    }

      enemyName.textContent = word;



  }
  const words = [
    // 'bicorn',
    // 'gargoyle',
    // 'sphinx',
    // 'basilisk',
    // 'echidna',
    // 'carbunclo',
    // 'ouroboros',
    'lizardman',
    'lilith',
    'goblin',
    'slime'
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
    type.textContent = " ";
    typed.textContent = " ";
    startTime = Date.now();
    setWord();
    move(isPlaying, isPlaying);
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
          result.textContent = 'Finished!\t' + elapsedTime + '\tseconds!';
          return;
        }


        switch (word) {
          case "slime":
            slime.alive = false;
            break;
          case "goblin":
            goblin.alive = false;
            break;
          case "lilith":
            lilith.alive = false;
            break;
          case "lizardman":
            lizardman.alive = false;
            const img = document.getElementById('enemyImg');
            break;
          default:
        }

        setTimeout(setWord, 200);


        move(isPlaying);
      }

  });




}
