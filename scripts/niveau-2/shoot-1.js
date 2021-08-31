
 function shooting() {
    let shoot =document.getElementById('shoot');
    let enemies = document.getElementsByClassName('enemies');
    let boss = document.getElementsByClassName('boss');

    shoot.style.top =shoot.offsetTop +10 +'px'
    shoot.style.left =shoot.offsetLeft  +'px'
    for (let i = 0; i < enemies.length; i++) {
        if(colisionDetect (shoot,shoot.offsetLeft, shoot.offsetTop, enemies[i])){
            console.log('shoot');
        shootExplode();
        (enemies[i]).style.backgroundImage = "url('assets/mechants/bad-guy_mort.png')";
    
        
        console.log(enemies)
            document.getElementById('gameContainer').removeChild((enemies[i]));
            enemies = document.getElementsByClassName('enemies');
            document.getElementById('shoot').style.display='none'
        }            
}

    for (let j = 0; j < boss.length; j++) {
        if(colisionDetect (shoot,shoot.offsetLeft, shoot.offsetTop, boss[j])){
        shootExplode();
        (boss[j]).style.backgroundImage = "url('assets/mechants/boss_mort.png')";
        
        
        console.log(boss)
            document.getElementById('gameContainer').removeChild((boss[j]));
            boss = document.getElementsByClassName('boss');
            document.getElementById('shoot').style.display='none'
            
        }            
    }
}  


    
    document.addEventListener('keydown', function (event) {
        if (hasGun) {
            let shoot = document.getElementById('shoot');

        let doomGuy = document.getElementById('player');

            if (event.code == 'KeyE') {
                
                shoot.style.top =shoot.offsetTop +10 +'px'
                shoot.style.left =shoot.offsetLeft  +'px'
    
                doomGuy.style.backgroundImage="url('assets/player/tir-1.png')";
                setTimeout (()=> doomGuy.style.backgroundImage="url('assets/player/tir-2.png')",100);
                setTimeout (()=>shoot.style.backgroundImage="url('assets/bomb/shoot-1.png')", 200);
    
                shoot.style.display='block';
                shoot.style.top = doomGuy.offsetTop  +10+'px';
                shoot.style.left = doomGuy.offsetLeft +10+'px';


                    
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



