let nomeHeroi = "Dante"
let xpHeroi = 9500
let nivel = "indefinido"
if (xpHeroi < 1000){
    nivel = "Ferro"
} else if (2000 > xpHeroi && xpHeroi > 1000){
    nivel = "Bronze"
} else if (5000 > xpHeroi  && xpHeroi > 2001){
    nivel = "Prata"
} else if (7000 > xpHeroi && xpHeroi > 6001){
    nivel = "Ouro"
} else if (8000 > xpHeroi && xpHeroi > 7001){
    nivel = "Platina"
} else if (9000 > xpHeroi && xpHeroi > 8001){
    nivel = "Ascendente"
} else if (10000 > xpHeroi && xpHeroi > 9001){
    nivel = "Imortal"
} else if (xpHeroi >= 10001){
    nivel = "Radiante"
}
console.log (xpHeroi)
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)