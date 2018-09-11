/**
 * Created by stagiaire on 10/09/2018.
 */


function rectangle()
{
    var canevas = document.querySelector('#canvas');
    var contexte = canevas.getContext('2d');
    var X = canevas.width ;
    var Y = canevas.height;
    var cote = 40;
    contexte.fillStyle = "#046380";
    x = (X-cote)/2 ; y = (Y - cote)/2 ;
    contexte.fillRect(x,y,cote,cote);

    function clavier_lire(e) {
        if (e.keyCode == 37) gauche();
        if (e.keyCode == 39) droite();
        if (e.keyCode == 40) bas();
        if (e.keyCode == 38) haut();
    }
    function droite() {
        contexte.clearRect(0,0,X,Y) ; x = x + 20;
        if (x>=X-40) x = X-40 ;
        contexte.fillRect(x,y,cote,cote);
    }
    function gauche() {
        contexte.clearRect(0,0,X,Y) ;
        x = x-20; if(x <=0) x = 0;
        contexte.fillRect(x,y,cote,cote);
    }
    function haut() {
        contexte.clearRect(0,0,X,Y) ; y = y-20 ;
        if (y<=0) y = 0 ;
        contexte.fillRect(x,y,cote,cote);
    }
    function bas() {
        contexte.clearRect(0,0,X,Y) ; y= y + 20 ;
        if(y >= Y-40) y= Y-40 ;
        contexte.fillRect(x,y,cote ,cote);
    }

    this.onkeydown = clavier_lire;
}
rectangle();




function rectangle3()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle="yellow";
    context.fillRect(10,10,200,100);
}
rectangle3();