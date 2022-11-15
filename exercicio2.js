// EXERCÍCIO 2 -página 41 do livro lógica de programação e algoritmos com javascript de Edécio Iepsen.
// elabora um program que leia o valor de um jantar. calcule e informe o valor da taxa do garçom(10%) e o valor total a ser pago.
// EXEMPLO:
// valor do jantar: R$80,00
// taxa do garçom: R$8,00
// total a pagar: R$88,00

let preçojantar = 1230;
let taxagarçom = (preçojantar/100) * 10;
let totalfatura = preçojantar + taxagarçom;

console.log(`valor do jantar: R$${preçojantar},00`);
console.log(`taxagarçom: R$${taxagarçom},00`);
console.log(`total a pagar R$${totalfatura},00`);