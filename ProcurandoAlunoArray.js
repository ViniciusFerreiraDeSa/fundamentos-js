const alunos = ["João", "Juliana", "Caio", "Ana"];                           // <- no caso esse Array
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]


function exibeNomeENota(aluno){ // Incluso na lista
    if(listaDeAlunosEMedias[0].includes(aluno)){                                        
        //const alunos =listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

                                                    // Criamos uma constante com as duas listas Sintaxe de desetruturação de listas.
        const [alunos , medias] = listaDeAlunosEMedias;

                                // indice do que está passando como paramêtro 0
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Juliana");