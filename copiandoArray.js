// Método  Spread Operator

const notas = [7, 5, 8, 9];

const novasNotas = [24, ...notas,20, 30 ,40]; //... operador de espalhamento, ele pega o conteudo do Array e espalha o conteudo. Ele da um Ctrl C nas notas, então ele vai fzr um cópia do ARRAY.

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);