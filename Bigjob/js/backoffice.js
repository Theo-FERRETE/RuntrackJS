document.addEventListener('DOMContentLoaded', function() {
    const requestsTable = document.getElementById('requestsTable');

    // Exemple de données fictives
    const requests = [
        { name: 'Jean Dupont', email: 'jean@laplateforme.io', date: '2023-10-01' },
        { name: 'Marie Curie', email: 'marie@laplateforme.io', date: '2023-10-02' }
    ];

    // Afficher les demandes
    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.name}</td>
            <td>${request.email}</td>
            <td>${request.date}</td>
            <td>
                <button class="btn btn-success btn-sm">Accepter</button>
                <button class="btn btn-danger btn-sm">Refuser</button>
            </td>
        `;
        requestsTable.appendChild(row);
    });

    // Ajouter la logique pour accepter/refuser ici
});
