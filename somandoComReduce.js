const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; // 67.5 / 9 = 7.5
const salaJava = [6, 5, 8, 9, 5, 6]; //  39 / 6 = 6.5
const salaPython = [7, 3.5, 8, 9.5]; // 28 / 4 = 7

// Intera sobre o ARRAY E USA UMA FUNÇÃO CALLBACK método REDUCE
function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0 ) //  <- 0 valor inicial do acumulador, ele vai somar os ARRAYS la em cima partido do zero
    const media = somaDasNotas / notasDaSala.length;

    return media;
}      

const salas = ["JavaScript", "Java", "Phyton"];

console.log(`A média da sala ${salas[0]}, é ${calculaMedia(salaJS)}`);
console.log(`A média da sala ${salas[1]}, é ${calculaMedia(salaJava)}`);
console.log(`A média da sala ${salas[2]}, é ${calculaMedia(salaPython)}`);

