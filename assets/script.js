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

