
function placarDeJogo(vitorias, derrotas) {
    return vitorias - derrotas;
}

let nomeHeroi = "gustavo";
let saldoVitorias = placarDeJogo(40, 90); 
let nivelHeroi;

if (saldoVitorias <= 10) {
    nivelHeroi = "Ferro";
} else if (saldoVitorias <= 20) {
    nivelHeroi = "Bronze";
} else if (saldoVitorias <= 50) {
    nivelHeroi = "Prata";
} else if (saldoVitorias <= 80) {
    nivelHeroi = "Ouro";
} else if (saldoVitorias <= 90) {
    nivelHeroi = "Diamante";
} else if (saldoVitorias <= 100) {
    nivelHeroi = "Lendário";
} else { 
    nivelHeroi = "Imortal";
}


console.log("O Herói de nome " + nomeHeroi + " tem saldo de " + saldoVitorias + " e está no nível " + nivelHeroi);
