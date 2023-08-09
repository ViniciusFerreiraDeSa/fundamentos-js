const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]; 
}

const media = somaNotas / notas.length;

console.log(`A média das notas são: ${media}`);

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let mediaNova = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      mediaNova += notasGerais[i][j]/notasGerais[i].length;
    }
  }
  mediaNova = mediaNova / notasGerais.length

  console.log(mediaNova);