alert("Bem vindo ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) ; // Gera um número aleatório
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao Número Secreto:
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    // Se o chute for = numeroSecreto:
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas ++;
    }
}

// OPERADOR TERNÁRIO
let palavraTentativa = tentativas > 1 ? "tentativas":"tentativa" ;
alert(`Você acertou! O número secreto era: ${numeroSecreto}. Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1){
//     
// } else {
//     alert(`Você acertou! O número secreto era: ${numeroSecreto}. Você tentou ${tentativas} tentativa.`);
// }