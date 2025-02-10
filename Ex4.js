function lettreE (chaine)
{
    for(let i = 0 ; i < chaine.length ; i++ )
    {
        if (chaine.charAt(i) === 'e')
        {
            return true;
        }
    }
        return false ;
}

let ChaineCaractere = prompt ("Saisir un mot");
if (lettreE(ChaineCaractere) === true)
{
    alert("Presence de la lettre e dans la chaine de caracteres saisies!");
}
else if (lettreE(ChaineCaractere) === false)
{
    alert("Lettre e non presente dans la chaine de caracteres saisies!");
}
