const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let quantidadeCartas = parseInt(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)"));

while(quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    quantidadeCartas = parseInt(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)"));
}

function comparador() { 
	return Math.random() - 0.5; 
}

function aparecerCartas(numeroCartas) {
    let gifs = cartas.slice(0, (numeroCartas / 2));
    gifs = gifs.concat(gifs).sort(comparador);
    let contador = 0;

    while(contador < numeroCartas) {
        let cartas = document.querySelector(".bottom");
        cartas.innerHTML += 
        `<div class="par">
        <div class="cards1" onclick="virarCartas(this)">
            <div class="back face">
                <img src="imgs/${gifs[contador]}">
            </div>
            <div class="front face">
                <img src="imgs/front.png">
            </div>
        </div>
        <div class="cards1" onclick="virarCartas(this)">
            <div class="back face">
                <img src="imgs/${gifs[contador+1]}">
            </div>
            <div class="front face">
                <img src="imgs/front.png">
            </div>
        </div>
    </div>`;
    contador += 2;
    }
}
aparecerCartas(quantidadeCartas); 

function virarCartas(elemento) {
    elemento.querySelector(".front").classList.add("frontflip");
    elemento.querySelector(".back").classList.add("backflip");
}