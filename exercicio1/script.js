//a) Peça ao usuário que insira um número **par**
let num = Number(prompt("Insira um numero par:"))
//Certificando que a varialvel e um numero
console.log(typeof num)

//b) Imprima no console **o resto da divisão** desse número por 2.
console.log("O Resto da divisao de", num, "por 2 e:", num % 2)

//c) Teste o programa com diversos números pares. Você notou um padrão?
//O resto da divisao de todo num par por dois e zero.

//d) O que acontece no console se o usuário inserir um número ímpar?
//O resto da divisao de todo num impar por dois e diferente de zero.
