let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter() {
    let elementoNome = document.getElementById("nome").value;
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;

    console.log(elementoNome);
    console.log(elementoIdade);
    console.log(elementoEmail);
    
    if (validacao()) {
        console.log("Formulário válido!");
    } else {
        console.log("Formulário inválido!");
    }
}

function validacao() {
    let validacaoEmail = document.getElementById("email").value;

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(validacaoEmail)) {
        alert("Email VÁLIDO!");
        return true;
    } else {
        alert("Email INVÁLIDO!");
        return false;
    }
}