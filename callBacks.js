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


// ------------------------------------Explicação for, for of forEach--------------------------//

// forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

// for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

// for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).