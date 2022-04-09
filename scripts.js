const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let quantidadeCartas = parseInt(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12 ou 14)"));

let primeiraCarta;

let segundaCarta;

let podeVirar = true;

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
    if(podeVirar) {
        elemento.querySelector(".front").classList.add("frontflip");
        elemento.querySelector(".back").classList.add("backflip");
        if (primeiraCarta === undefined) {
            primeiraCarta = elemento;
        }
        else {
            segundaCarta = elemento;
            verificarPares() 
        } 
    }
}

// verificar se cartas são pares
function verificarPares() {
    const primeiraCartaTras = primeiraCarta.querySelector(".back > img").getAttribute("src");
    const segundaCartaTras = segundaCarta.querySelector(".back > img").getAttribute("src");
    const iguais = primeiraCartaTras === segundaCartaTras;

    if (!iguais) {
        podeVirar = false;
        setTimeout(function() {
            primeiraCarta.querySelector(".front").classList.remove("frontflip");
            primeiraCarta.querySelector(".back").classList.remove("backflip");
            segundaCarta.querySelector(".front").classList.remove("frontflip");
            segundaCarta.querySelector(".back").classList.remove("backflip");
        
            primeiraCarta = undefined;
            segundaCarta = undefined;

            podeVirar = true;
        }, 1000);
    }
    else {
        primeiraCarta.removeAttribute("onclick");
        segundaCarta.removeAttribute("onclick");
        primeiraCarta = undefined;
        segundaCarta = undefined;
    }
}