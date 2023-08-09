const notas = [10, 9.5, 8, 7];


// o Map cria um novo Array então é interessante você atribuir ele a uma constante ou uma variável.
const notasAtualizadas = notas.map((nota) =>{
  if(nota >= 10){
    return 10;
  }else{
    return Math.round(nota); // o método Math.round arredonda para o número inteiro mais próximo.
  }
})

console.log(notasAtualizadas);

const nomes = ["Vinicius","bia","DAVI","GabrIele"];

const nomesMaisculos = nomes.map((nomes) =>{
    return nomes.toUpperCase();
})
// const nomesMaisculos = nomes.map(nomes => nomes.toUpperCase()); Forma de escrever Arrow Function tabém.

console.log(nomesMaisculos);