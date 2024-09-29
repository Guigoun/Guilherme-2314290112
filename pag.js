document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    
    async function fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            userList.innerHTML = '<p>Erro ao carregar usuários.</p>';
        }
    }

    
    function displayUsers(users) {
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            userList.appendChild(userCard);
        });
    }

    
    fetchUsers();
});