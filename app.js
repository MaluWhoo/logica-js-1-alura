alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 5;
console.log(`O número secreto é: ${numeroSecreto}`);
let chute;

// enquanto o chute não for igual ao Número Secreto:
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a 10`);

    // Se o chute for = numeroSecreto:
    if (chute == numeroSecreto){
        alert(`Você acertou! O número secreto era: ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O númerp secreto é maior que ${chute}`);
        }
    }
}