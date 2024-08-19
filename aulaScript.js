let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter() {
    let elementoNome = document.getElementById("nome").value;
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;
    
    if(validaEmail(elementoEmail) == true){
        console.log(elementoNome);
        console.log(elementoIdade);
        console.log(elementoEmail);
    } else {
        alert("Inválido");
    }
}

function validaEmail(email){
    return /^[a-zA-Z0-9]+(?:[\.\-\_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}(?:[\.][a-zA-Z]+)*$/.test(email);
}