function addBoss(max){

    for (let i = 0; i < max; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'boss')
        div.setAttribute('animtCounterBoss','0')
        div.setAttribute('id', 'boss-'+i)
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
function positionEnemies(boss){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*12;
    let y = randomPosition[1]*12;
    boss.style.top = x + 'px';
    boss.style.left = y + 'px';
}

setInterval(mouvEnemies, 400)

function mouvEnemies(){
    let doomGuy = document.getElementById('player');
    let boss = document.getElementsByClassName('boss');
    
    for (let i = 0; i < boss.length; i++){
        let animtCounterBoss=parseInt(boss[i].getAttribute('animtCounterBoss'))
        animtCounterBoss ++; 
        if (animtCounterBoss >2) animtCounterBoss=1
        boss[i].setAttribute('animtCounterBoss',animtCounterBoss)
        let random = Math.floor(Math.random()*24);
        boss[i].style.backgroundImage="url('assets/mechants/boss-" + animtCounterBoss + ".png')";
        
switch (random) {
    case 0: 
    if(boss[i].offsetLeft <=696 ){
        boss[i].style.top = boss[i].offsetTop +40 +'px';
        boss[i].style.left = boss[i].offsetLeft  +'px';
        
    }
        break;
    case 1: 
    if(boss[i].offsetTop <=696 ){
        boss[i].style.top = boss[i].offsetTop  +'px';
        boss[i].style.left = boss[i].offsetLeft +40 +'px';
    }
        break;
    case 2: 
    if( boss[i].offsetLeft >=80 && boss[i].offsetTop >=24 ){
        boss[i].style.top = boss[i].offsetTop  +'px' ;
        boss[i].style.left = boss[i].offsetLeft -40 +'px';
    }  
        break;
    case 3: 
    if(boss[i].offsetTop >=80 ){
        boss[i].style.top = boss[i].offsetTop -40 +'px' ;
        boss[i].style.left = boss[i].offsetLeft  +'px';
    }   
        break;
    
    default:
        
}


    }
    
for (let i = 0; i < boss.length; i++) {
            if(colisionDetect (doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop, (boss[i]))){
               /*  boss.backgroundImage="url('assets/mechants/demon-2.png')" */
                doomGuyDead();
               
            }
            
        }

}



/*  
    if (boss.offsetTop + enemiesSize < doomGuy.offsetTop + doomGuySize && boss.offsetLeft + enemiesSize < doomGuy.offsetLeft + doomGuySize){
   https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection 
    */

