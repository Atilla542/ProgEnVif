var AB = prompt("Entrez la longueur du cote AB");
var AC = prompt("Entrez la longueur du cote AC");
var BC = prompt("Entrez la longueur du cote BC");

AB = parseFloat(AB);
AC = parseFloat(AC);
BC = parseFloat(BC);

 if (AB <= 0 || AC <= 0 || BC <= 0 || !AB || !AC || !BC) 
 {
    alert("Veuillez entrer des nombres valides et positifs pour les côtés.");
 }
 else 
{
    if ((AB * AB + AC * AC === BC * BC))
    {
        alert("ABC est rectangle en B");
    } 
    else if ((AB * AB + BC * BC === AC * AC)) 
    {
        alert("ABC est rectangle en A");
    } 
    else if ((AC * AC + BC * BC === AB * AB)) 
    {
        alert("ABC est rectangle en C");
    }
    else 
    {
        alert("ABC n'est pas rectangle")
    }
}