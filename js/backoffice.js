document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
        alert('Demande acceptée.');
        // Mettre à jour le statut dans le fichier JSON (simulation).
    });
});

document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
        alert('Demande refusée.');
        // Mettre à jour le statut dans le fichier JSON (simulation).
    });
});
