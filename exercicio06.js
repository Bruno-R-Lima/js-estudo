//mostre os anos bisextos a parti do ano de 1004 até o ano atual.

let ano= 1004;

while(ano <= 2022){
    if(!(ano % 100 === 0) || (ano % 400 === 0)){
        document.write(ano + "<br>");
    } else{
        document.write(ano + " não é bisexto!");
    }
    
    ano += 4;
}

