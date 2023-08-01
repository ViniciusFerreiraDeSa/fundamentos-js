function apresentar (nome){
    return `meu nome é ${nome}.`
}


// Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}.`
const soma = (x,y) => x + y;

// Arrow Function com mais de uma linha de código

const somaNumerosPequenos = (x, y) => {
    if(x > 10 || y > 10 ){
        return "Somente números de 1 a 9";
    }else{
        return x + y;
    }
}

console.log(somaNumerosPequenos(11, 2))
// Arrow function curto e rapido de usar para função
// Declarar função algo mais explicativo e elaborado
