<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style_lvl1.css">
    <title>WolfenBomberStein</title>
</head>
<body>
<div id="nextLevel">
<div class="container_titre">
        <div class="titre"><H1>WolfenBomberSteinMan</H1></div>
        <div class="lvl"><H3>Niveau 1</H3></div>   
    </div>
    
    
<div class="container_global">
  <div class="container_rules">Utiliser les fleches directionnelles pour vous deplacer.<br><br> La touche 'ESPACE' permet de poser une bombe qui detruit les ennemis.<br><br>Pour gagner il suffit de detruire tous les ennemis.<br><br>Les monstres bleus peuvent tuer le heros, <br><br>si le heros meurt la partie est finie.</div>

  <div class="container_game">
  <div id="mort">GAME OVER<br><button onclick="document.location.reload()">Rejouer</button></div>
  <div id="victoire">Victoire !! Les forces de l'enfer ont ete repoussees !<br><button onclick="document.location.reload()">Rejouer</button><button id='btnNext'>Niveau suivant</button> 
  </div>
    <div class="container">   
        <div class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        <div class="content">
       
            <div id="gameContainer">

                <div id="player"></div>
                <div id="bomb"></div>
                
            </div>
        </div>
  </div>
  </div> 
</div>





   


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
                $(document).ready(function(){
                $("#btnNext").click(function(){
                    $("#nextLevel").load("niveau-2.php").show();
                });
                });
        </script>

<script src="/wolfenbomberstein/scripts/badguy.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-1/bomb.js"></script>
<script src="/wolfenbomberstein/scripts/boss.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-1/main.js"></script>




</body>
</html>