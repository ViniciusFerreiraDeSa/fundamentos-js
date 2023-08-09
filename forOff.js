const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let nota of notas){
    somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(`A média das notas são: ${media}`);