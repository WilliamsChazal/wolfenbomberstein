<link rel="stylesheet" href="style_lvl3.css">


<div class="container_titre">
        <div class="titre"><H1>WolfenBomberStein</H1></div>
        <div class="lvl"><H3>Niveau 3</H3></div>   
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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
                $(document).ready(function(){
                $("#btnNext").click(function(){
                    $("#nextLevel").load("niveau-3.php").show();
                });
                });
        </script>