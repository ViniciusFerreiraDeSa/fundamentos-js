const senhaCorreta = "vinishow123";


function validaCadastro (senha){
    if(senha === senhaCorreta){
        console.log("Acesso autorizado!");
    }else{
        console.log("Senha Errada!");
    }
}

validaCadastro("vinishow123");