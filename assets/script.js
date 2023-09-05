//check if the js is linked
console.log("JS linkado");

//Create function check if the inputs have been filled
function verificarInputs() {

    let name = document.getElementById("input-name").value;
    let telfixo = document.getElementById("input-telfixo").value;
    let cell = document.getElementById("input-cell").value;
    let foto = document.getElementById("input-foto").value;
    let date = document.getElementById("input-date").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let insta = document.getElementById("input-insta").value;
    let git = document.getElementById("input-git").value;


    console.log("Nome" + name);
    console.log("Telefone Fixo:" + telfixo);
    console.log("Celular:" + cell);
    console.log("URL da imagem:" + foto);
    console.log("Data de Nascimento:" + date);
    console.log("E-mail:" + email);
    console.log("CEP:" + cep);
    console.log("Cidade:" + cidade);
    console.log("Intagram:" + insta);
    console.log("Github:" + git);


    if (name == "" || telfixo == "" || cell == "" || foto == "" || date == "" || email == "" || cep == "" || cidade == "" || insta == "" || git =="") {

        console.log("Os dados estao vazios");

        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

//Create class if person data
class Person {
    constructor(name, telfixo, cell, foto, date, email, cep, cidade, insta, git) {
        this.name = name;
        this.telfixo = telfixo;
        this.cell = cell;
        this.foto = foto;
        this.date = date;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git;
        this.age = this.calculateAge(date);
        console.log("Passou pelo constructor da class Pet");
    }
}

    calculateAge(birthdate) {
    let today = new Date();
    let birthdate_ = new Date(birthdate);
    console.log("Pedro", birthdate);
    let age = today.getFullYear() - birthdate_.getFullYear();
    let month = today.getMonth() - birthdate_.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate_.getDate())) {
        age--;
    }
    return age;
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    function cadastrarPerson() {
        const name = document.getElementById("input-name").value;
        const telfixo = document.getElementById("input-telfixo").value;
        const cell = document.getElementById("input-cell").value;
        const foto = document.getElementById("input-foto").value;
        const date = document.getElementById("input-date").value;
        const email = document.getElementById("input-email").value;
        const cep = document.getElementById("input-cep").value;
        const cidade = document.getElementById("input-cidade").value;
        const insta = document.getElementById("input-insta").value;
        const git = document.getElementById("input-git").value;
        
        console.log(name);
        console.log(telfixo);
        console.log(cell);
        console.log(foto);
        console.log(date);
        console.log(email);
        console.log(cep);
        console.log(cidade);
        console.log(insta);
        console.log(git);
    
        personList.adicionarPerson(name,telfixo,cell,foto, date, email, cep, cidade, insta, git);
    }

    class PersonList {
        constructor() {
            this.persons = [];
        }
    
        adicionarPet(name, telfixo, cell, foto, date, email, cep, cidade, insta, git) {
            if (isAnyInputEmpty()) {
                sendMSG("Preencha todos os campos!", "error");
            } else if (!isURLValida(foto)) {
                sendMSG("URL da imagem inválida!", "error");
            }
            else {
                const person = new Person(name, telfixo, cell, foto, date, email, cep, cidade, insta, git);
                this.persons.push(person);
                sendMSG("Pessoa adicionado ao sistema!", "success");
                clearInputs();
            }
    
        }
        }

        function exibirPersons() {
            const personList = document.getElementById("containerLista");
            personList.innerHTML = "";
        
            personsList.persons.forEach(person => {
                const cardDiv = `
                        <div class="card">
                            <img src="${person.foto}" alt="${person.name}">
                            <h2>Telefone Fixo:${person.telfixo}</h2>
                            <p>Telefone Celular:${person.cell}</p>
                            <p>Data de Nascimento:: ${person.data}</p>
                            <p>Idade: ${person.age}</p>
                            <p>Signo: ${person.age}</p>
                            <p>Email: ${person.email}</p>
                            <p>CEP: ${person.cep}</p>
                            <p>Cidade: ${person.cidade}</p>
                            <p>Instagram: ${person.insta}</p>
                            <p>Github: ${person.git}</p>
                            <p>Idade: ${person.age}</p>
                            
                            <button id="but-editPet" type="submit" class="button" onclick="editarPet()"> Editar </button>
                            <button id="but-removePet" type="submit" class="button" onclick="removePet()"> Remover </button>
                        </div>
                    `;
        
                petList.innerHTML += cardDiv;
            });
        }
        
    


