let nomeHeroi = "Dante"
let xpHeroi = 9000
let nivel = "indefinido"
if (xpHeroi < 1000){
    nivel = "Ferro"
}
console.log(nivel)
if (1001<xpHeroi<2000){
    nivel = "Bronze"
}
console.log(nivel)
if (2001<xpHeroi<5000){
    nivel = "Prata"
}
console.log(nivel)
if (6001<xpHeroi<7000){
    nivel = "Ouro"
}
console.log(nivel)
if (7001<xpHeroi<8000){
    nivel = "Platina"
}
console.log(nivel)
if (8001 < xpHeroi < 9000){
    nivel = "Ascendente"
}
console.log(nivel)
if (9001 < xpHeroi < 10000){
    nivel = "Imortal"
}
console.log(nivel)
if (10001 <= xpHeroi){
    nivel = "Radiante"
}
console.log(nivel)
console.log(xpHeroi)
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)
