let quantidadeCartas = parseInt(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)"));

while(quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    quantidadeCartas = parseInt(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)"));
}

function aparecerCartas(numeroCartas) {
    let contador = 0;
    while(contador < numeroCartas / 2) {
        let cartas = document.querySelector(".bottom");
        cartas.innerHTML += 
        `<div class="par">
        <div class="cards1">
            <img class="front" src="imgs/front.png" alt="">
        </div>
        <div class="cards2">
            <img class="front" src="imgs/front.png" alt="">
        </div>
        </div>`;
    contador ++;
    }
}
aparecerCartas(quantidadeCartas);