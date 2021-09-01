let doomWalkLvl3 = 0;
let doomCountLvl3 = 0;

function addDoom(max){

    for (let i = 0; i < max; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'doom')
        div.setAttribute('id', 'doom-'+i)
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
function positionEnemies(doom){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*12;
    let y = randomPosition[1]*12;
    doom.style.top = x + 'px';
    doom.style.left = y + 'px';
}

setInterval(mouvEnemies, 200)

function mouvEnemies(){
    let doomGuy = document.getElementById('player');
    let doom = document.getElementsByClassName('doom');
    doomCountLvl3++;
    

    for (let i = 0; i < doom.length; i++){
        let random = Math.floor(Math.random()*24);
        doom[i].style.backgroundImage="url('assets/mechants/doom-" + doomCountLvl3 + ".png')";
        
switch (random) {
    case 0: 
    if(doom[i].offsetLeft <=696 ){
        doom[i].style.top = doom[i].offsetTop +80 +'px';
        doom[i].style.left = doom[i].offsetLeft  +'px';
        
    }
        break;
    case 1: 
    if(doom[i].offsetTop <=696 ){
        doom[i].style.top = doom[i].offsetTop  +'px';
        doom[i].style.left = doom[i].offsetLeft +80 +'px';
    }
        break;
    case 2: 
    if( doom[i].offsetLeft >=80 && doom[i].offsetTop >=24 ){
        doom[i].style.top = doom[i].offsetTop  +'px' ;
        doom[i].style.left = doom[i].offsetLeft -80 +'px';
    }  
        break;
    case 3: 
    if(doom[i].offsetTop >=80 ){
        doom[i].style.top = doom[i].offsetTop -80 +'px' ;
        doom[i].style.left = doom[i].offsetLeft  +'px';
    }   
        break;
    
    default:
        
}


    }
    
for (let i = 0; i < doom.length; i++) {
            if(colisionDetect (doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop, (doom[i]))){
               /*  doom.backgroundImage="url('assets/mechants/demon-2.png')" */
                doomGuyDead2();
               
            }
            
        }
        if (doomCountLvl3 >= 2 ) doomCountLvl3=0 
}