function addOne() {
    let compteur = document.getElementById("compteur");
    let valeur = parseInt(compteur.textContent); 
    compteur.textContent = valeur + 1; 
}

document.getElementById("button").addEventListener("click", addOne);
