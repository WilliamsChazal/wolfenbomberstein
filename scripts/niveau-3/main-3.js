
let tilesetLvl3 = document.getElementsByClassName('tileset');
let gameLvl3 = document.getElementById('gameContainer');
let moveSizeLvl3 = 12;
let doomGuyWalkLvl3 = 0;
count = 0;


function addPlayer(){
      let div = document.createElement('div');
      div.setAttribute('class', 'player')
      div.setAttribute('id', 'player')
      document.getElementById('gameContainer').appendChild(div);
}
function addBomb(){
      let div = document.createElement('div');
      div.setAttribute('class', 'bomb')
      div.setAttribute('id', 'bomb')
      document.getElementById('gameContainer').appendChild(div);
}

//Fonction de collision
function colisionDetect(ref_obj, new_x, new_y, obj){
  if ((new_y < obj.offsetTop + obj.offsetHeight &&
      new_y + ref_obj.offsetHeight > obj.offsetTop) &&
      (new_x < obj.offsetLeft + obj.offsetWidth &&
      new_x + ref_obj.offsetWidth > obj.offsetLeft)) {
          console.log('boom'); 
      return true;} 
  else {
      return false}
        
}

function colisionDetectList(ref_obj, new_x, new_y, list) {
    for (let y = 0; y < list.length; y++){
          if (colisionDetect (ref_obj,new_x, new_y, (list [y]))) {
            console.log('mur');
            return true;
          }
        } return false 
}


// Génération aléatoire du décor

function addtileset(){
  if (gameContainer.offsetLeft <=680 && gameContainer.offsetTop <= 680) {
    
  }
    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tileset')
        div.setAttribute('id', 'tileset-'+i)
        document.getElementById('gameContainer').appendChild(div);
        positiontileset(div);
    }
}
function getRandomPosition(){
    let randomX = Math.floor(Math.random()*24);
    let randomY = Math.floor(Math.random()*24);
    while (randomX < 2 || randomY <2){
      randomX = Math.floor(Math.random()*24);
      randomY = Math.floor(Math.random()*24);
  }
    return[randomX,randomY];
    
}
function positiontileset(tileset){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*32;
    let y = randomPosition[1]*32;
    tileset.style.top = x + 'px';
    tileset.style.left = y + 'px';
}


/* function addWall() {
  x = 0
  ymin = 0
  ymax = 700
  while (x < game.offsetWidth) {
    let div =document.createElement('div');
    div.setAttribute('class', 'wall')
    document.getElementById('gameContainer').appendChild(div);
    div.style.top = x + 'px';
    div.style.left = ymin + 'px';
    
   div =document.createElement('div');
    div.setAttribute('class', 'wall')
    document.getElementById('gameContainer').appendChild(div);
    div.style.top = x + 'px';
    div.style.left = game.offsetWidth - div.offsetWidth + 'px';
    x = x+div.offsetWidth
  }
  
} */




//Fonction de la mort du doomGuy
function doomGuyDead() {
  let doomGuy = document.getElementById('player');
  doomGuy.style.backgroundImage="url('assets/player/mort-1.png')";
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/player/mort-2.png')", 100);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/player/mort-3.png')", 300);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/player/mort-4.png')", 500);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/player/mort-5.png')", 700);
    setTimeout (()=>document.getElementById('player').style.display='none', 750); 
    setTimeout (()=>document.getElementById('mort').style.display='block', 800);
    
    
    /* setTimeout (()=>alert('dead'), 2500); */
}

function bombExplode() {
  setTimeout (()=>bomb.style.backgroundImage="url('assets/bomb/bomb-2.png')",500);
  setTimeout (()=>bomb.style.backgroundImage="url('assets/bomb/bomb-3.png')", 650); 
}


function shootExplode() {
  setTimeout (()=>shoot.style.backgroundImage="url('assets/bomb/shoot-1.png')",500);
  setTimeout (()=>shoot.style.backgroundImage="url('assets/bomb/shoot-2.png')", 650); 
}

function addShoot(){
  let div = document.createElement('div');
  div.setAttribute('class', 'shoot')
  div.setAttribute('id', 'shoot')
  document.getElementById('gameContainer').appendChild(div);
}


//Fonction de déplacement du DoomGuy
document.addEventListener('keydown', function(event) {
  let doomGuy = document.getElementById('player');
/*     console.log(doomGuy.style.top);
    console.log(doomGuy.style.left); */
  if (event.code == 'ArrowUp') {

      if (!colisionDetectList(doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop-moveSizeLvl3, tileset)) {
        if(doomGuy.offsetTop >=8){  
          doomGuyWalkLvl3 = doomGuyWalkLvl3 + 1;
          count ++;
          this.onkeydown = doomGuy.style.backgroundImage="url('assets/player/dos-" + count + ".png')";
        if (count >= 5 ) count=0
          doomGuy.style.top = (doomGuy.offsetTop - moveSizeLvl3) + "px";}
      }
    
  } 


  else if (event.code == 'ArrowRight') {
    // déplacement
    if (!colisionDetectList(doomGuy,doomGuy.offsetLeft + moveSizeLvl3, doomGuy.offsetTop, tileset)){
    if(doomGuy.offsetLeft <=720){
      doomGuyWalkLvl3 = doomGuyWalkLvl3 + 1;
      count ++;
      this.onkeydown = doomGuy.style.backgroundImage="url('assets/player/droite-" + count + ".png')";
    if (count >= 5 ) count=0 
    doomGuy.style.left = (doomGuy.offsetLeft + moveSizeLvl3) + "px";
  } 
}   
} 

  else if (event.code == 'ArrowDown') {
    // déplacement   
    if (!colisionDetectList(doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop + moveSizeLvl3,tileset)){ 
    if(doomGuy.offsetTop <=420){
      doomGuyWalkLvl3 = doomGuyWalkLvl3 + 1;
      count ++;
      this.onkeydown = doomGuy.style.backgroundImage="url('assets/player/face-" + count + ".png')";
    if (count >= 5 ) count=0
    doomGuy.style.top = (doomGuy.offsetTop + moveSizeLvl3) + "px";
  }
}
} 
  else if (event.code == 'ArrowLeft') {
    if (!colisionDetectList(doomGuy,doomGuy.offsetLeft -moveSizeLvl3, doomGuy.offsetTop, -moveSizeLvl3, tileset)){
    // déplacement  
  if(doomGuy.offsetLeft >= -5){
    doomGuyWalkLvl3 = doomGuyWalkLvl3 + 1;
    count ++;
    this.onkeydown = doomGuy.style.backgroundImage="url('assets/player/gauche-" + count + ".png')";
  if (count >= 5 ) count=0
  doomGuy.style.left = (doomGuy.offsetLeft - moveSizeLvl3) + "px";
  }
    }
}

});



 function init() {
  gameContainer.innerHTML = '';
  tileset = document.getElementsByClassName('tileset');
  gameLvl3 = document.getElementById('gameContainer');
  moveSizeLvl3 = 12;
  doomGuyWalkLvl3 = 0;
  count = 0;
   /* addWall(); */
   addtileset();
   addEnemies(8);
   addBoss(2)
   testEnd();
   addPlayer();
   addBomb();
   addShoot();
 }

 init();