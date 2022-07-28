const button =  document.querySelector(".conteudo-2-formulario-entrar");

button.addEventListener("click", function(e){
    e.preventDefault();
    const user = document.querySelector("#user").value;
    const passw = document.querySelector("#password").value;
    console.log('Usuário: '+user)
    console.log('Senha: '+passw)
})
