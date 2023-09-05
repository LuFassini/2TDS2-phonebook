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
    console.log("Data de Nascimento:" + date);
    console.log("E-mail:" + email);
    console.log("CEP:" + cep);
    console.log("Cidade:" + cidade);
    console.log("Intagram:" + insta);
    console.log("Github:" + git);


    if (name == "" || telfixo == "" || cell == "" || date == "" || email == "" || cep == "" || cidade == "" || insta == "" || git =="") {

        console.log("Os dados estao vazios");

        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}