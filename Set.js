const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Serve para remover numeros, ou strings repetidas.
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);