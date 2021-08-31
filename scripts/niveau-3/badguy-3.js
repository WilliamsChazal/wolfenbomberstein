let monsterGuyWalkdLvl3 = 0;
let badGuyCountlvl3 = 0;

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
    badGuyCountlvl3 ++;

    for (let i = 0; i < enemies.length; i++){
        let random = Math.floor(Math.random()*24);
        enemies[i].style.backgroundImage="url('assets/mechants/bad-guy-" + badGuyCountlvl3 + ".png')";
       
        
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
    if (badGuyCountlvl3 >= 2 ) badGuyCountlvl3=0

        
}

