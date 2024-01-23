const quantidade = document.querySelectorAll(".quantidade");
const enviar = document.getElementById("enviar");
const retorno = document.getElementById("retorno");

const comanda = document.getElementById("comanda");

const precos = new Array (
    42.50,
    38.25,
    39.99,
    44.50
)
// enviar.addEventListener('click', () => {

//     var soma = 0;

//     for(let i = 0; i < quantidade.length; i++)  {

//         soma += quantidade[i].value * precos[i];

//     }

//     retorno.value = soma;     
    
// })

enviar.addEventListener('click', () =>   {
    comanda.classList.add("seletor");
})

