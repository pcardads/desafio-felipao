// git add .
// git commit -m "adicionei o texto"
// git push -u origin main

let nomeHeroi = "Batman"
let xpHeroi = 8900

if (xpHeroi<1000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Ferro")
}

else if (xpHeroi>=1000 && xpHeroi<2000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Bronze")
}

else if (xpHeroi>=2000 && xpHeroi<5000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Prata")
}

else if (xpHeroi>=5000 && xpHeroi<7000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Ouro")
}

else if (xpHeroi>=7000 && xpHeroi<8000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Platina")
}

else if (xpHeroi>=8000 && xpHeroi<9000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Ascendente")
}

else if (xpHeroi>=9000 && xpHeroi<=10000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Imortal")
}

else if (xpHeroi>10000) {
    console.log("O heroi " + nomeHeroi + " está no nível de Radiante")
}
