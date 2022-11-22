 //perça para digitar um número e mostre a tabuada desse número ate o número maximo de 100.
//e separe a tabuada a cada multiplo de dez!


let numero=parseInt(prompt("digite um numero"));
let index= 1;

while( numero <= 1000){
    document.write(`${numero} x ${index} : ${numero * index} <br>`);
    
    if(index % 10 === 0){
        document.write("<hr>");
    };

    index += 1;
};

