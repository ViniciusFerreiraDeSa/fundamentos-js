const alunos = ["João", "Juliana", "Caio", "Ana"];                           // <- no caso esse Array
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
                                                                    // o 0 representa a lista de alunos dentro da const, o 1 representa ao indice do Array alunos
console.log(`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}. A nota dela foi ${listaDeAlunosEMedias[1][3]}`)
