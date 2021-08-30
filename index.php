<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>WolfenBomberStein</title>
</head>
<body>
<div id="nextLevel">
    <div class="container_titre">
        <div class="titre"><H1>WolfenBomberStein</H1></div>
        
    </div>
    
    
<div class="container_global">
  <div class="container_rules">Utiliser les flèches directionnels pour vous déplacer.<br> La touche 'ESPACE' permet de poser une bombe qui détruit les enemies.<br>Pour gagner il suffit de détruire tous les enemies.<br>Les monstres bleu peuvent tuer le héros, <br>si le héros meurt la partie est finie.</div>
  <div id="nextLevel">
  <div class="container_game">
  <div id="mort">GAME OVER<br><button onclick="document.location.reload()">Rejouer</button><button id='btnNext'>Niveau suivant</button></div>
  <div id="victoire">Victoire !! Les forces de l'enfer ont été repoussé !<br><button onclick="document.location.reload()">Rejouer</button> 
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

<script src="scripts/badguy.js"></script>
<script src="scripts/boss.js"></script>
<script src="scripts/bomb.js"></script>
<script src="scripts/main.js"></script>



</body>
</html>