document.querySelectorAll('.btn-warning').forEach(button => {
    button.addEventListener('click', () => {
        alert('Utilisateur promu.');
        // Mettre à jour le rôle dans le fichier JSON (simulation).
    });
});

document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
        alert('Utilisateur supprimé.');
        // Supprimer l'utilisateur dans le fichier JSON (simulation).
    });
});
