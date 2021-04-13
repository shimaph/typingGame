class Enemy {
  constructor(name) {
    this.name = name;
    this.alive = true;
    this.img1 = `img/${name}/row-3-col-1.png`;
    this.img2 = `img/${name}/row-3-col-2.png`;
    this.img3 = `img/${name}/row-3-col-3.png`;
    this.img4 = `img/${name}/row-3-col-2.png`;
  }
}

const enemies = [
  new Enemy('slime'),
  new Enemy('goblin'),
  new Enemy('lilith'),
  new Enemy('lizardman')
]

const enemy = document.getElementById("enemy");
let x = 0;


function move(isPlaying, reset) {
  if(isPlaying !== true) {
    return;
  }
  let x = 0;

  function foward(){
    enemy.style.marginLeft = `${x}px`;
    enemy.style.marginTop = `250px`;
    x +=10;
    console.log(x);
    }
  intervalIdfoward = setInterval(foward, 200);
}







function enemyFunc(enemyName) {
  enemy.style.display = "block";
  enemyName.alive = true;

  enemyImgInterval(enemyName);
}




function enemyImgInterval(enemyName) {

  let t = 0;

  function enemyImg() {
       if(enemyName.alive === false) {
         console.log('clear');
        clearInterval(intervalId);
        enemy.style.display = "none";
      }

    const img = document.getElementById("enemyImg");

    switch(t){
      case 0:
        img.setAttribute('src', enemyName.img1);
        t++;
        break;
      case 1:
        img.setAttribute('src', enemyName.img2);
        t++;
        break;
      case 2:
        img.setAttribute('src', enemyName.img3);
        t++;
        break;
      case 3:
        img.setAttribute('src', enemyName.img2);
        t -= 3;
        break;
    }

  }
  let intervalId = setInterval(enemyImg, 200);
}
