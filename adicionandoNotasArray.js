const notas = [10, 6, 8];

// metódo Push empurra/ isere algo dentro do Array

notas.push(7); // como ele adiciona um valor novo no Array, ele sempre irá colocar o valor na posição final do Array, por exemplo antes a posição final era 2 agora virou 3 =)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
