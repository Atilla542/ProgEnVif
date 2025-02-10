const NombreADeviner = Math.floor(Math.random() * 100) + 1;
let x = parseInt(prompt("Entrez un nombre"));

while (x != NombreADeviner)
{
if (x > NombreADeviner) 
{
    x = parseInt (prompt("Nombre saisi est plus grand que le nombre a deviner"));
}
else if (x < NombreADeviner)
{
    x = parseInt (prompt("Nombre saisi est plus petit que le nombre a deviner"));
}
}
    alert("Vous avez devine le nombre!!!");



