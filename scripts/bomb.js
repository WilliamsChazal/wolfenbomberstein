document.addEventListener('keydown', function(event) {
    let bomb = document.getElementById('bomb');
    console.log('coucou')
    let enemies = document.getElementsByClassName('enemies');
    let boss = document.getElementsByClassName('boss');
    let doomGuy = document.getElementById('player');
    if (event.code == 'Space'){
        /* setTimeout (()=> */doomGuy.style.backgroundImage="url('assets/player/tir-1.png')";
         setTimeout (()=> doomGuy.style.backgroundImage="url('assets/player/tir-2.png')",100);

        bomb.style.display='block';
        bomb.style.top = doomGuy.offsetTop  +10 + "px";
        bomb.style.left = doomGuy.offsetLeft +10 + "px";
 
        setTimeout (()=>bomb.style.backgroundImage="url('assets/bomb/bomb.png')", 200);

        for (let i = 0; i < enemies.length; i++) {
            if(colisionDetect (bomb,bomb.offsetLeft, bomb.offsetTop, (enemies[i]))){
               bombExplode();
               (enemies[i]).style.backgroundImage = "url('assets/mechants/bad-guy_mort.png')";
               /* setTimeout (()=>(enemies [i]).style.display ='none',600); */
             
               console.log(enemies)
                document.getElementById('gameContainer').removeChild((enemies[i]));
                enemies = document.getElementsByClassName('enemies');
            }            
        }

        for (let j = 0; j < boss.length; j++) {
            if(colisionDetect (bomb,bomb.offsetLeft, bomb.offsetTop, (boss[j]))){
               bombExplode();
               (boss[j]).style.backgroundImage = "url('assets/mechants/boss_mort.png')";
               /* setTimeout (()=>(enemies [i]).style.display ='none',600); */
             
               console.log(boss)
                document.getElementById('gameContainer').removeChild((boss[j]));
                boss = document.getElementsByClassName('boss');
            }            
        }
      } 
}); 

function testEnd() {
    let enemies = document.getElementsByClassName('enemies');
    let boss = document.getElementsByClassName('boss');
    if (enemies.length == 0 && boss.length == 0) {
        setTimeout (()=>document.getElementById('victoire').style.display='block', 800);
    }
    setTimeout (()=>testEnd(),1000)
}



