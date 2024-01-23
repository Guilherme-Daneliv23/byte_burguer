const quantidade = document.querySelectorAll(".quantidade")
const enviar = document.getElementById("enviar");

enviar.addEventListener('click', () => {
    console.log(quantidade[1].value);
})