let monsterGuyWalk = 0;


function addEnemies(max){

    for (let i = 0; i < max; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'enemies')
        div.setAttribute('id', 'enemy-'+i)
        document.getElementById('gameContainer').appendChild(div);
        positionEnemies(div);
    }
}
function getRandomPosition(){
    let randomX = Math.floor(Math.random()*24);
    let randomY = Math.floor(Math.random()*24);
     while (randomX < 2 || randomY <2) { 
         randomX = Math.floor(Math.random()*24);
         randomY = Math.floor(Math.random()*24);  
    }
    return[randomX,randomY];
}
function positionEnemies(enemy){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*12;
    let y = randomPosition[1]*12;
    enemy.style.top = x + 'px';
    enemy.style.left = y + 'px';
}

setInterval(mouvEnemies, 500)

function mouvEnemies(){
    let doomGuy = document.getElementById('player');
    let enemies = document.getElementsByClassName('enemies');

    for (let i = 0; i < enemies.length; i++){
        let random = Math.floor(Math.random()*24);
        
switch (random) {
    case 0: 
    if(enemies[i].offsetLeft <=696 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px';
        enemies[i].style.left = enemies[i].offsetLeft  +'px';
        
    }
        break;
    case 1: 
    if(enemies[i].offsetTop <=696 ){
        enemies[i].style.top = enemies[i].offsetTop  +'px';
        enemies[i].style.left = enemies[i].offsetLeft +40 +'px';
    }
        break;
    case 2: 
    if( enemies[i].offsetLeft >=80 && enemies[i].offsetTop >=24 ){
        enemies[i].style.top = enemies[i].offsetTop  +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }  
        break;
    case 3: 
    if(enemies[i].offsetTop >=80 ){
        enemies[i].style.top = enemies[i].offsetTop -40 +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft  +'px';
    }   
        break;
    
    default:
        
}


    }
    

        
}

/* const doomGuy = document.getElementById('doomGuy');
const enemies = document.getElementsByClassName('enemies');
colisionDetect(doomGuy.offsetLeft, doomGuy.offsetTop, enemies [0]);
function colisionDetect(x, y, enemy){
    if ((y < enemy.offsetTop + enemy.offsetHeight &&
        y + doomGuy.offsetHeight > enemy.offsetTop) &&
        (x < enemy.offsetLeft + enemy.offsetWidth &&
        x + doomGuy.offsetWidth > enemy.offsetLeft)) {
            console.log('boom'); 
        return true;} 
    else {
        return false}
          
} */

/*  
    if (enemies.offsetTop + enemiesSize < doomGuy.offsetTop + doomGuySize && enemies.offsetLeft + enemiesSize < doomGuy.offsetLeft + doomGuySize){
   https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection 
    */

