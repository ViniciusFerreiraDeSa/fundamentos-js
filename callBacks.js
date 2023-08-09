const nomes = ["Vinicius", "Maria", "Lucas", "Lais"];

nomes.forEach(function(nome) {
    console.log(nome);
})
    

nomes.forEach((nome) => {
    console.log(nome);
})

function imprimiNome(nome){
    console.log(nome);
}

nomes.forEach(imprimiNome);


// Para comentar 
// varias linhas no 
// windows use Crlt ; com as 
// linha selecionas 