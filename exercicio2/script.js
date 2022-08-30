//Faça um programa que pergunte ao usuário dois números. 
//Em seguida, faça as operações e imprima no console 
//as seguintes mensagens seguidas pelo `true` ou `false`:

const num1 = Number(prompt("Digite um numero:"))
const num2 = Number(prompt("Digite outro numero:"))

console.log("Numero 1:", num1)
console.log("Numero 2:", num2)

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", (num1 % num2) === 0)
console.log("O segundo numero é divisível pelo primeiro?", (num2 % num1) === 0)
