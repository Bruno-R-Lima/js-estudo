// EXERCÍCIO 3- página 45 do livro lógica de programação e algoritmos com javaScript de Edécio Iepsen.
// Elabora um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamentos da loja.
// EXEMPLO:
// preço: R$60,00
// à vista:R$54,00
// ou  3x de:R$:20,00

let preçoproduto = 2330 .toFixed(2);
let avista = (preçoproduto -((preçoproduto/100) * 10)) .toFixed(2);
let aprazo = (preçoproduto / 3) .toFixed(2);


console.log(`preço: R$${preçoproduto}`);
console.log(`à vista: R$${avista}`);
console.log(`ou 3x de R$${aprazo}`);