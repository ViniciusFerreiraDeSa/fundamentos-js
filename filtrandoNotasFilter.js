const alunos = ["Ana", "Marcos", "Maria", "Mario"];
const medias =[7, 4.5, 8, 7.5];

// Filter tem um lógica de verdadeiro ou falso, caso você não uso o primeiro parâmetro você coloca um _ para o JS reconhecer que ele não será usado
const reprovados = alunos.filter((aluno, indice) =>{
    if(medias[indice] >= 7){
        console.log(`Parabéns ${aluno}`);
    }else {
        console.log( `Infelizmente você reprovou ${aluno}. Se dedique mais para o próximo bismestre!!! `);
    }
})

