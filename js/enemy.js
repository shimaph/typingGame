const slime = {
  name: "slime",

  img1: 'img/slime/row-3-col-1.png',
  img2: 'img/slime/row-3-col-2.png',
  img3: 'img/slime/row-3-col-3.png',
  img4: 'img/slime/row-3-col-2.png',

  alive: true,
}


 const goblin = {
   name: "goblin",

   img1: 'img/goblin/row-3-col-1.png',
   img2: 'img/goblin/row-3-col-2.png',
   img3: 'img/goblin/row-3-col-3.png',
   img4: 'img/goblin/row-3-col-2.png',

   alive: true,
 }


 const lilith = {
   name: "lilith",

   img1: 'img/lilith/row-3-col-1.png',
   img2: 'img/lilith/row-3-col-2.png',
   img3: 'img/lilith/row-3-col-3.png',
   img4: 'img/lilith/row-3-col-2.png',

   alive: true,
 }

 const lizardman = {
   name: "lizardman",

   img1: 'img/lizardman/row-3-col-1.png',
   img2: 'img/lizardman/row-3-col-2.png',
   img3: 'img/lizardman/row-3-col-3.png',
   img4: 'img/lizardman/row-3-col-2.png',

   alive: true,
 }

const enemy = document.getElementById("enemy");
let x = 0;



function move(isPlaying, reset) {
  if(isPlaying !== true) {
    return;
  }
  let x = -80;



  function foward(){
    enemy.style.marginLeft = x + "px";
    x +=10;
    console.log(x);
  }

  intervalIdfoward = setInterval(foward, 200);

}











function enemyFunc(enemyName) {
  enemy.style.display = "block";
  let exist = true;

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
