let gunCountlvl3 =0;

function addGun(max){

    for (let i = 0; i < max; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'gun')
        div.setAttribute('id', 'gun-'+i)
        document.getElementById('gameContainer').appendChild(div);
        positionEnemies(div);
    }
}


function getRandomPositionGun() {
    let randomX = Math.floor(Math.random()*24);
    let randomY = Math.floor(Math.random()*24);
     while (randomX < 2 || randomY <2) { 
         randomX = Math.floor(Math.random()*24);
         randomY = Math.floor(Math.random()*24);  
    }
    return[randomX,randomY];
}

function positionGun(){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*12;
    let y = randomPosition[1]*12;
    enemy.style.top = x + 'px';
    enemy.style.left = y + 'px';
    
}
setInterval(animateGun, 200)
function animateGun(){
    let gun = document.getElementsByClassName('gun')
    for (let i = 0; i < gun.length; i++){
        gun[i].style.backgroundImage="url('assets/bomb/gun-" + gunCountlvl3 + ".png')";
    
}
if (gunCountlvl3 >= 2 ) gunCountlvl3=0 
}


function takeGun() {
    let gun = document.getElementsByClassName('gun');
    let doomGuy = document.getElementById('player');
    for (let i = 0; i < gun.length; i++){
        
        if(colisionDetect (doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop, (gun[i]))){
               console.log(gun)
                document.getElementById('gameContainer').removeChild((gun[i]));
                enemies = document.getElementsByClassName('gun');
                hasGunLvl3=true
            }
    }

}