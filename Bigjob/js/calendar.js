document.getElementById('calendarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    if (!date) {
        alert('Veuillez sélectionner une date.');
        return;
    }
    console.log(`Demande d'autorisation pour la date : ${date}`);
    alert('Votre demande a été envoyée.');
    // Ajouter la logique pour sauvegarder la demande ici
});
