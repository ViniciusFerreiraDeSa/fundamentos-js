// expresão de função
const soma = function (num1 , num2){
    return num1 + num2;
}

console.log(soma((3+2), 2));

// Diferença Principal: HOISTING, lista as funções
console.log(apresentar());

function apresentar(){
    return "Hello!";
}

/*  Reference Error
    console.log(soma(3 , 5))

    const soma = function (num1 , num2){
        return num1 + num2;
    }
*/