document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email.endsWith('@laplateforme.io')) {
        alert('Veuillez utiliser une adresse email de La Plateforme_.');
        return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
});
