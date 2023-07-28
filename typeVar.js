// tipo Var

/*var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area);
*/


// tipo Let

let forma = "Retângulo";
let alturaA = 5;
let alturaB = 7;
let area2;

if (forma === "Retângulo"){
    area2 = alturaA * alturaB;
}else{
    area2 = (alturaA * alturaB) / 2; 
}

console.log(area2);


// Tipo constante

const forma1 = "Quadrado";
const altura1 = 5;
const comprimento1 = 7;
let area1;

if(forma1 == 'Quadrado'){
    area1 = altura1  * comprimento1;
}else{
    area1 = (altura1 * comprimento1) / 2; 
}



console.log(area1);