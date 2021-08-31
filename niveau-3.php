<link rel="stylesheet" href="styles/style_lvl3.css">


<div class="container_titre">
        <div class="titre"><H1>WolfenBomberStein</H1></div>
        <div class="lvl"><H3>Niveau 3</H3></div>   
    </div>
    
    
<div class="container_global">
  <div class="container_rules">Utiliser les fleches directionnels pour vous deplacer.<br><br> La touche 'ESPACE' permet de poser une bombe qui detruit les enemies.<br><br>Pour gagner il suffit de detruire tous les enemies.<br><br>Les monstres bleu peuvent tuer le heros, <br><br>si le heros meurt la partie est finie.<br><br><span>Ramasser le fusil pour pouvoir tirer avec la touche 'E'</span></div>
  <div id="nextLevel">
  <div class="container_game">
  <div id="mort">GAME OVER<br><button onclick="document.location.reload()">Rejouer</button></div>
  <div id="victoire">Victoire !! Les forces de l'enfer ont ete repousses !<br><button onclick="document.location.reload()">Rejouer</button> 
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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
                $(document).ready(function(){
                $("#btnNext").click(function(){
                    $("#nextLevel").load("niveau-3.php").show();
                });
                });
        </script>
<script src="/wolfenbomberstein/scripts/niveau-3/badguy-3.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/gun-3.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/bomb-3.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/shoot-3.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/boss-3.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/doom.js"></script>
<script src="/wolfenbomberstein/scripts/niveau-3/main-3.js"></script>