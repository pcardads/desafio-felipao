function rankear(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = rankear(10, 2);

if (saldoVitorias<10) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Ferro.")
}

else if (saldoVitorias>=11 && saldoVitorias<=20) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Bronze.")
}

else if (saldoVitorias>=21 && saldoVitorias<=50) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Prata.")
}

else if (saldoVitorias>=51 && saldoVitorias<=80) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Ouro.")
}

else if (saldoVitorias>=81 && saldoVitorias<=90) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Diamante.")
}

else if (saldoVitorias>=91 && saldoVitorias<=100) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Lendario.")
}

else if (saldoVitorias>=101) {
    console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível de Imortal.")
}
