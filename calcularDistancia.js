function calcularDistancia(distTotal, torre1, torre2){
    distancia = distTotal / (torre1 + torre2)
    return distancia.toFixed(2)
}


console.log(calcularDistancia(100, 2, 2))