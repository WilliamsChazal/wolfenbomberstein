

let shootMouvLvl3 = 0
 function shooting() {
    let shoot =document.getElementById('shoot');
    let doomGuy = document.getElementById('player');
    let enemies = document.getElementsByClassName('enemies');
    shootMouvLvl3 ++;
    shoot.style.top =shoot.offsetTop +10 +'px'
    shoot.style.left =shoot.offsetLeft  +'px'
}  


    
    document.addEventListener('keydown', function (event) {
        let shoot = document.getElementById('shoot');
        let enemies = document.getElementsByClassName('enemies');
        let boss = document.getElementsByClassName('boss');
        let doomGuy = document.getElementById('player');

            if (event.code == 'KeyE') {
                shootMouvLvl3 ++;
                shoot.style.top =shoot.offsetTop +10 +'px'
                shoot.style.left =shoot.offsetLeft  +'px'
    
                doomGuy.style.backgroundImage="url('assets/player/tir-1.png')";
                setTimeout (()=> doomGuy.style.backgroundImage="url('assets/player/tir-2.png')",100);
                setTimeout (()=>shoot.style.backgroundImage="url('assets/bomb/shoot-1.png')", 200);
    
                shoot.style.display='block';
                shoot.style.top = doomGuy.offsetTop  +10+'px';
                shoot.style.left = doomGuy.offsetLeft +10+'px';

                for (let f = 0; f < enemies.length; f++) {
                    if(colisionDetect (shoot,shoot.offsetLeft, shoot.offsetTop, (enemies[f]))){
                    shootExplode();
                    (enemies[f]).style.backgroundImage = "url('assets/mechants/bad-guy_mort.png')";
                
                    
                    console.log(enemies)
                        document.getElementById('gameContainer').removeChild((enemies[f]));
                        enemies = document.getElementsByClassName('enemies');
                    }            
            }
    
                for (let g = 0; g < boss.length; g++) {
                    if(colisionDetect (shoot,shoot.offsetLeft, shoot.offsetTop, (boss[g]))){
                    shootExplode();
                    (boss[g]).style.backgroundImage = "url('assets/mechants/boss_mort.png')";
                    
                    
                    console.log(boss)
                        document.getElementById('gameContainer').removeChild((boss[g]));
                        boss = document.getElementsByClassName('boss');
                    }            
                }
                    
                }           
    })    
    
    function testEnd() {
        let enemies = document.getElementsByClassName('enemies');
        let boss = document.getElementsByClassName('boss');
        if (enemies.length == 0 && boss.length == 0) {
            setTimeout (()=>document.getElementById('victoire').style.display='block', 800);
        }
        setTimeout (()=>testEnd(),1000)
    }
        
    setInterval(shooting,100)

/* console.log(shooting('shoot')) */



