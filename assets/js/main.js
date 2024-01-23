const quantidade = document.querySelectorAll(".quantidade");
const enviar = document.getElementById("enviar");

enviar.addEventListener('click', () => {
    for(let i = 0; i < quantidade.length; i++)  {
        console.log(quantidade[i].value);
    }
    
})