<link rel="stylesheet" href="styles/style_lvl2.css">

<div id="nextLevel">
<div class="container_titre">
        <div class="titre"><H1>WolfenBomberStein</H1></div>
        <div class="lvl"><H3>Niveau 2</H3></div>   
    </div>
    
    
<div class="container_global">
  <div class="container_rules">Utiliser les fleches directionnels pour vous deplacer.<br> La touche 'ESPACE' permet de poser une bombe qui detruit les enemies.<br>Pour gagner il suffit de detruire tous les enemies.<br>Les monstres bleu peuvent tuer le heros, <br>si le heros meurt la partie est finie.</div>
  <div id="nextLevel">
  <div class="container_game">
  <div id="mort">GAME OVER<br><button onclick="document.location.reload()">Rejouer</button></div>
  <div id="victoire">Victoire !! Les forces de l'enfer ont ete repousse !<br><button id='btnNext'>Niveau suivant</button>
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
                <div id="shoot"></div>
               
                
            </div>
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
   
<script src="/wolfenbomberstein/scripts/niveau-2/badguy-2.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-2/gun.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-2/bomb-2.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-2/boss-2.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-2/shoot-1.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-2/main-2.js"></script>




</body>
</html>