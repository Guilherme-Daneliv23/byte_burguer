const quantidade = document.querySelectorAll(".quantidade");
const enviar = document.getElementById("enviar");
const retorno = document.getElementById("retorno");

const card = document.getElementById("card");
const teste = document.getElementById("teste");

const precos = new Array (
    42.50,
    38.25,
    39.99,
    44.50
)
enviar.addEventListener('click', () => {

    var soma = 0;

    for(let i = 0; i < quantidade.length; i++)  {

        soma += quantidade[i].value * precos[i];

    }

    retorno.value = soma;     
    
})

teste.addEventListener('click', () =>   {
    card.classList.add("seletor");
})

