class UserData {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class CRUDApp {
    constructor() {
        this.userDataList = [];
        this.form = document.getElementById('crud-form');
        this.dataList = document.getElementById('data-list');
        this.form.addEventListener('submit', this.addUserData.bind(this));
        this.render();
    }

    addUserData(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name && email) {
            const newUser = new UserData(name, email);
            this.userDataList.push(newUser);
            this.render();
            this.form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    render() {
        this.dataList.innerHTML = '';
        this.userDataList.forEach((userData, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>Nome:</strong> ${userData.name}</span><br>
                <span><strong>Email:</strong> ${userData.email}</span><br>
                <button onclick="crudApp.editUserData(${index})">Editar</button>
                <button onclick="crudApp.deleteUserData(${index})">Deletar</button>
            `;
            this.dataList.appendChild(li);
        });
    }