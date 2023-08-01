function soma(x, y){
    return x + y;
}
console.log(soma(5 , 4));

function chamaParametros(nome, idade){
    return `Olá meu nome é ${nome}, e minha idade é ${idade}. `
}
console.log(chamaParametros("Vinicius", 18))

function multiplica (num1 = 1, num2 = 1){
    return num1 * num2;
}                           // 6        // 3
console.log(multiplica(soma(4, 2), soma(2, 1)));
console.log(multiplica(soma(4, 2)));