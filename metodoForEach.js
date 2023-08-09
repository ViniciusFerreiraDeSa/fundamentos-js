const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(function(nota, indiceDoArray){
    somaNotas += nota;
    console.log(indiceDoArray);
})

const media = somaNotas / notas.length;

console.log(`A média das notas são: ${media}`);
