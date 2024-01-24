const quantidade = document.querySelectorAll(".quantidade");
const enviar = document.getElementById("enviar");
const retorno = document.getElementById("retorno");

const comanda = document.getElementById("comanda");

const quantidadeComanda = document.querySelectorAll("#quantidade-comander");
const valorComanda = document.querySelectorAll("#valor-comander");

const valorPagamento = document.getElementById("valor-pagamento");

console.log(quantidadeComanda);

const precos = new Array (
    42.50,
    38.25,
    39.99,
    44.50
)

enviar.addEventListener('click', () =>   {
    comanda.classList.add("seletor");

    exibePedido();
    calculaPagamento();
})

function exibePedido()  {
    for(let i = 0; i < quantidade.length; i++)  {
        quantidadeComanda[i].innerHTML = "Quantidade: " + quantidade[i].value;
        valorComanda[i].innerHTML = "Valor: " + quantidade[i].value * precos[i];

    }
}

function calculaPagamento() {
    
    var soma = 0;

    for(let i = 0; i < quantidade.length; i++)  {

        soma += quantidade[i].value * precos[i];

    }

    valorPagamento.innerHTML = soma;
}

