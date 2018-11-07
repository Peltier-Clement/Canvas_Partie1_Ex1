var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(270,1);   // Ajout d'un segment
ctx.lineTo(150,150);
ctx.lineTo(400,150);
ctx.closePath();      // Fin du chemin
ctx.fillStyle = "peru"; // Couleur de remplissage
ctx.fill();

ctx.fillStyle = "powderblue";
ctx.fillRect(150,150,400,400); // fillRect sert à produire une forme en carré ou rectangle uniquement

ctx.fillStyle = "grey"
ctx.fillRect(170,190,30,30);
ctx.fillRect(350,190,30,30);
ctx.fillRect(240,300,70,100);
