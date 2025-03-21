document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email.endsWith('@laplateforme.io')) {
        alert('Seuls les emails de La Plateforme_ sont autorisés.');
        return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
    // Ajouter la logique de connexion ici
});
