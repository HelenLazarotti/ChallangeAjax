function procurar() {
    //pego o dado que o usuário digitou:
    let textoCEP = document.getElementById("cep").value;
    const ajax = new XMLHttpRequest();

    //pegando a API dos dados:
    ajax.open("GET", "https://viacep.com.br/ws/" + textoCEP + "/json/");
    ajax.send();
    ajax.onload = function () {
        document.getElementById("texto").innerHTML = this.responseText;

        //transformo:
        let obj = JSON.parse(this.responseText);

        //chamo os itens do JSON que quero:
        let numCep = obj.cep;
        let cidade = obj.localidade;
        let estado = obj.uf;

        //crio a frase pro usuário:
        document.getElementById("texto").innerText = `CEP: ${numCep} > Cidade: ${cidade} - (${estado})`;

        //chamo meu form e div com as ofertas:
        let container = document.querySelector(".divOffers");
        let formDiv = document.querySelector(".form");

        //torno dinâmico para aparecer/sumir conforme as ações dos usuários:
        container.classList.remove("hide");
        formDiv.classList.add("hide");


    }
}
//botão de voltar caso usuário tenha errado seu CEP:
function backpage() {
    //mesma coisa do que a função anterior
    let offers = document.querySelector(".divOffers");
    let forms = document.querySelector(".form");
    let input = document.querySelector("#cep");

    offers.classList.add("hide");
    forms.classList.remove("hide");

    //função extra para que quando o usuário volte (caso erro o CEP), o campo input se limpe/esvazie:
    input.value = "";

}
