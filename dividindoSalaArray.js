const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// Método Slice Fatiar // dividir

const sala1 = alunos.slice(0, alunos.length/ 2 ); 
// Você precisa adicionar uma variavel ou uma constante nesse método pois ele altera o Array. Então precisamos adicionar uma novo atributo
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);
