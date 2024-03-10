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

    editUserData(index) {
        const newName = prompt('Digite o novo nome:');
        const newEmail = prompt('Digite o novo email:');
        if (newName && newEmail) {
            this.userDataList[index].name = newName;
            this.userDataList[index].email = newEmail;
            this.render();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    deleteUserData(index) {
        if (confirm('Tem certeza que deseja deletar este usuário?')) {
            this.userDataList.splice(index, 1);
            this.render();
        }
    }
}

const crudApp = new CRUDApp();
