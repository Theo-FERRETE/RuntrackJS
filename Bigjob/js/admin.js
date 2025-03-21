document.addEventListener('DOMContentLoaded', function() {
    const usersTable = document.getElementById('usersTable');
    const addAdminButton = document.getElementById('addAdmin');

    // Exemple de données fictives
    const users = [
        { name: 'Jean Dupont', email: 'jean@laplateforme.io', role: 'Utilisateur' },
        { name: 'Marie Curie', email: 'marie@laplateforme.io', role: 'Modérateur' }
    ];

    // Afficher les utilisateurs
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="btn btn-danger btn-sm">Supprimer</button>
            </td>
        `;
        usersTable.appendChild(row);
    });

    // Ajouter un administrateur
    addAdminButton.addEventListener('click', function() {
        const name = prompt('Nom de l\'utilisateur :');
        const email = prompt('Email de l\'utilisateur :');
        if (name && email) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>Administrateur</td>
                <td>
                    <button class="btn btn-danger btn-sm">Supprimer</button>
                </td>
            `;
            usersTable.appendChild(row);
        } else {
            alert('Veuillez fournir un nom et un email valides.');
        }
    });

    // Ajouter la logique pour supprimer un utilisateur ici
});
