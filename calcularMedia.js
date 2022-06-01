function media(a, b){
    const PESO_A = 3.5
    const PESO_B = 7.5
    const SOMA_PESOS = PESO_A + PESO_B
    var media = ((a * PESO_A) + (b * PESO_B))/ SOMA_PESOS
    console.log(media.toFixed(5))
}

media(5,7.1)